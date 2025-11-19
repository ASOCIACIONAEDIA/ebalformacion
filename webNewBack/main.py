import os
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Tuple, Union # Import necessary types
from dotenv import load_dotenv
# from emails.template import JinjaTemplate # Keep commented if not using external templates
from emails import Message
from fastapi.middleware.cors import CORSMiddleware
import logging # For basic logging
from datetime import date # For potential date handling

# Imports for PDF generation
from io import BytesIO
from xhtml2pdf import pisa

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

app = FastAPI(title="AEDIA Email API", description="API para enviar emails desde los formularios de AEDIA")

# --- CORS Configuration ---
# Allow requests from your frontend development server and production domain
# Adjust origins as needed
origins = ["*"]  # Allow all origins

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"], # Allow only POST requests
    allow_headers=["*"],
)

# --- Pydantic Models for Request Data (Updated) ---
class ContactForm(BaseModel):
    name: str
    email: EmailStr
    course: Optional[str] = None
    subject: str
    message: str

class InfoRequestForm(BaseModel):
    name: str
    email: EmailStr
    phone: str
    courseTitle: str
    comments: Optional[str] = None

class SyllabusRequestForm(BaseModel):
    name: str
    email: EmailStr
    courseTitle: str
    phone: Optional[str] = None # Added optional phone field

# Updated EnrollmentForm to match the new frontend structure
class EnrollmentForm(BaseModel):
    # Personal Info
    name: str
    email: EmailStr
    phone: str
    dni: str
    dob: str # Keep as string for simplicity, or use date
    address: str
    postalCode: str
    city: str
    province: str
    # Billing Info (Optional)
    billingName: Optional[str] = None
    billingNif: Optional[str] = None
    billingAddress: Optional[str] = None
    billingPostalCode: Optional[str] = None
    billingCity: Optional[str] = None
    billingProvince: Optional[str] = None
    billingCountry: Optional[str] = None
    billingEmail: Optional[EmailStr] = None
    billingPhone: Optional[str] = None
    # Course Info
    courseTitle: str
    coursePrice: Optional[Union[float, int]] = None # Allow float/int/None
    # Consents & Acceptance
    contractAccepted: bool
    acceptCommunications: bool
    acceptanceTimestamp: str # ISO string timestamp from frontend
    # Generated Texts
    contractText: str = Field(..., description="El texto completo generado del contrato")
    studentRecordText: str = Field(..., description="El texto completo generado de la ficha del alumno")

# --- Email Sending Configuration ---
EMAIL_HOST = os.getenv("EMAIL_HOST")
EMAIL_PORT = int(os.getenv("EMAIL_PORT", 587))
EMAIL_USERNAME = os.getenv("EMAIL_USERNAME")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER") # Admin receiver

if not all([EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_SENDER, EMAIL_RECEIVER]):
    logger.error("Error: Faltan variables de entorno para la configuración del email.")
    # You might want to raise an exception here or handle it differently
    # For now, we'll log and let it potentially fail later

# --- Plantilla HTML para el email del estudiante ---
def create_student_welcome_html(name: str, course_title: str) -> str:
    html_content = f"""
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>¡Bienvenido/a a AEDIA!</title>
<style>
    body {{ font-family: sans-serif; margin: 0; padding: 0; background-color: #f4f7f6; }}
    .container {{ max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }}
    .header {{ background: linear-gradient(to right, #6366F1, #8B5CF6); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }}
    .header h1 {{ margin: 0; font-size: 24px; font-weight: 600; }}
    .content {{ padding: 30px 25px; color: #333; line-height: 1.6; }}
    .content h2 {{ color: #4F46E5; font-size: 20px; margin-bottom: 15px; }}
    .info-box {{ background-color: #f0f5ff; border-left: 4px solid #6366F1; padding: 15px 20px; margin: 20px 0; border-radius: 4px; }}
    .info-box p {{ margin: 5px 0; color: #444; }}
    .info-box strong {{ color: #333; }}
    .footer {{ padding: 20px; text-align: center; font-size: 12px; color: #888; background-color: #f9f9f9; border-top: 1px solid #eee; }}
</style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>¡Tu matrícula está confirmada! 🚀</h1>
        </div>
        <div class="content">
            <h2>Hola {name},</h2>
            <p>¡Te damos la bienvenida oficial a AEDIA! Estamos encantados de que te hayas unido a nosotros y estamos listos para acompañarte en este emocionante nuevo camino de aprendizaje.</p>

            <div class="info-box">
                <p><strong>Curso Matriculado:</strong> {course_title}</p>
                <p><strong>Modalidad:</strong> Online / Telepresencial</p>
            </div>

            <p>Has completado el primer paso de tu inscripción.</p>
            <p><strong>Próximos pasos:</strong> En un plazo máximo de <strong>24-48 horas hábiles</strong>, recibirás un segundo correo electrónico con las instrucciones detalladas para acceder a nuestra plataforma de estudios online y comenzar tu formación.</p>
            <p>Mientras tanto, si tienes alguna duda, no dudes en contactarnos respondiendo a este correo o visitando nuestra sección de contacto en la web.</p>
            <p>¡Estamos muy contentos de tenerte a bordo!</p>
            <p>Atentamente,<br>El equipo de AEDIA</p>
        </div>
        <div class="footer">
            Asociación Española para la Difusión de la Inteligencia Artificial | <a href="https://aedia.es" style="color: #6366F1;">aedia.es</a>
        </div>
    </div>
</body>
</html>
"""
    return html_content

# --- Helper para generar PDF desde Texto (Mejorado) --- 
def create_pdf_from_text(text_content: str, title: str = "Documento AEDIA") -> Optional[bytes]:
    """Convierte una cadena de texto a bytes PDF, reemplazando saltos de línea por <br>."""
    # Reemplazar saltos de línea por <br> para forzar el formato
    # Escapar caracteres HTML básicos en el contenido para evitar problemas
    import html
    escaped_content = html.escape(text_content)
    html_content_with_breaks = escaped_content.replace('\n', '<br>\n')

    # Envolver el contenido procesado en HTML básico con estilos
    html = f'''
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>{html.escape(title)}</title>
        <style>
            @page {{ size: A4; margin: 2cm; }}
            body {{
                font-family: "Helvetica", "Arial", sans-serif;
                font-size: 10pt;
                line-height: 1.4;
            }}
            /* Opcional: si aún quieres usar pre, pero <br> es más fiable */
            /* pre {{ white-space: pre-wrap; word-wrap: break-word; font-family: "Courier New", Courier, monospace; font-size: 9pt; }} */
        </style>
    </head>
    <body>
        {html_content_with_breaks}
    </body>
    </html>
    '''
    result = BytesIO()
    # Encode explicitly to UTF-8
    pdf = pisa.pisaDocument(BytesIO(html.encode("UTF-8")), result, encoding='UTF-8') 
    if not pdf.err:
        return result.getvalue()
    else:
        logger.error(f"Error al generar PDF '{title}': {pdf.err}")
        return None

# --- Función de envío de email MODIFICADA para manejar bytes en adjuntos ---
def send_email(
    subject: str,
    recipients: Union[str, List[str], Tuple[str, ...]],
    context: dict,
    html_body_override: Optional[str] = None,
    # Ahora espera tuplas (filename: str, content_bytes: bytes, mimetype: str)
    attachments: Optional[List[Tuple[str, bytes, str]]] = None 
):
    if not all([EMAIL_HOST, EMAIL_PORT, EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_SENDER]):
         logger.error("Configuración de SMTP incompleta. No se puede enviar email.")
         raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Error interno del servidor: Configuración de email incompleta."
        )

    message = Message(
        subject=subject,
        mail_from=("AEDIA", EMAIL_SENDER),  # Formato: "AEDIA <email@domain.com>"
        mail_to=recipients,
    )

    if html_body_override:
        message.html = html_body_override
    else:
        html_content = f"<h2>{subject}</h2>"
        html_content += "<h3>Detalles Principales:</h3><p>"
        for key, value in context.items():
            if key not in ['contractText', 'studentRecordText', 'contractAccepted', 'acceptanceTimestamp'] and value is not None:
                formatted_key = key.replace('_', ' ').capitalize()
                html_content += f"<strong>{formatted_key}:</strong> {value}<br>"
        html_content += "</p>"
        message.html = html_content

    if attachments:
        for filename, content_bytes, mimetype in attachments:
            if content_bytes:
                try:
                    # Pasar los bytes directamente
                    message.attach(filename=filename, data=content_bytes, mimetype=mimetype)
                    logger.info(f"Adjuntando archivo: {filename} ({len(content_bytes)} bytes)")
                except Exception as attach_err:
                    logger.error(f"Error al adjuntar {filename}: {attach_err}")
            else:
                 logger.warning(f"No se pudo adjuntar {filename} porque el contenido PDF era None.")

    try:
        recipient_log = recipients if isinstance(recipients, (list, tuple)) else [recipients]
        logger.info(f"Intentando enviar email a {', '.join(recipient_log)} desde {EMAIL_SENDER} via {EMAIL_HOST}:{EMAIL_PORT}")
        
        # Configuración SMTP con SSL (puerto 465)
        smtp_config = {
            "host": EMAIL_HOST, 
            "port": EMAIL_PORT, 
            "user": EMAIL_USERNAME, 
            "password": EMAIL_PASSWORD, 
            "ssl": True  # Usar SSL en lugar de TLS
        }
        
        response = message.send(smtp=smtp_config)
        logger.info(f"Email enviado: {response}")
        return response
    except Exception as e:
        logger.error(f"Error al enviar email: {e}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error al enviar el email: {e}"
        )

# --- API Endpoints (Updated Enrollment Endpoint Call) ---

@app.post("/send-contact-email", status_code=status.HTTP_200_OK)
async def post_contact_email(form: ContactForm):
    subject = f"Nuevo Mensaje de Contacto: {form.subject}"
    context = form.model_dump()
    try:
        send_email(
            subject=subject,
            recipients=EMAIL_RECEIVER, # Send only to admin
            context=context,
            html_body_override=None,
            attachments=None
        )
        return {"message": "Contact email sent successfully"}
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Error en el endpoint send_contact_email: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Error interno: {e}")

@app.post("/send-info-request-email", status_code=status.HTTP_200_OK)
async def post_info_request_email(form: InfoRequestForm):
    subject = f"Solicitud de Información: {form.courseTitle}"
    context = form.model_dump()
    try:
        send_email(
            subject=subject,
            recipients=EMAIL_RECEIVER, # Send only to admin
            context=context,
            html_body_override=None,
            attachments=None
        )
        return {"message": "Info request email sent successfully"}
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Error en el endpoint send_info_request_email: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Error interno: {e}")

@app.post("/send-syllabus-request-email", status_code=status.HTTP_200_OK)
async def post_syllabus_request_email(form: SyllabusRequestForm):
    subject = f"Solicitud de Temario: {form.courseTitle}"
    context = form.model_dump()
    try:
        send_email(
            subject=subject,
            recipients=EMAIL_RECEIVER, # Send only to admin
            context=context,
            html_body_override=None,
            attachments=None
        )
        return {"message": "Syllabus request email sent successfully"}
    except HTTPException as http_exc:
        raise http_exc
    except Exception as e:
        logger.error(f"Error en el endpoint send_syllabus_request_email: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=f"Error interno: {e}")

# Updated Enrollment Endpoint para usar el generador de PDF mejorado
@app.post("/send-enrollment-email", status_code=status.HTTP_200_OK)
async def post_enrollment_email(form: EnrollmentForm):
    admin_subject = f"Nueva Matrícula Registrada: {form.courseTitle} - {form.name}"
    student_subject = f"¡Bienvenido/a a AEDIA! Matrícula confirmada para {form.courseTitle}"

    # Generar PDFs usando la función mejorada y dando títulos
    contract_pdf_bytes = create_pdf_from_text(form.contractText, title=f"Contrato Formacion - {form.name}")
    record_pdf_bytes = create_pdf_from_text(form.studentRecordText, title=f"Ficha Alumno - {form.name}")

    # Preparar adjuntos PDF para el admin
    admin_attachments = []
    if contract_pdf_bytes:
        admin_attachments.append(("contrato_formacion.pdf", contract_pdf_bytes, "application/pdf"))
    else:
        logger.error("No se pudo generar el PDF del contrato.")
        
    if record_pdf_bytes:
        admin_attachments.append(("ficha_alumno.pdf", record_pdf_bytes, "application/pdf"))
    else:
        logger.error("No se pudo generar el PDF de la ficha de alumno.")

    admin_email_sent = False
    student_email_sent = False
    first_error = None

    # 1. Send email to admin con PDFs
    try:
        logger.info("Intentando enviar email de matrícula al administrador con PDFs adjuntos.")
        send_email(
            subject=admin_subject,
            recipients=EMAIL_RECEIVER,
            context=form.model_dump(),
            html_body_override=None,
            attachments=admin_attachments
        )
        admin_email_sent = True
        logger.info("Email de matrícula enviado correctamente al administrador.")
    except Exception as e:
        logger.error(f"FALLO al enviar email de matrícula al admin: {e}", exc_info=True)
        first_error = e

    # 2. Send email to student
    if form.email:
        try:
            logger.info(f"Intentando enviar email de bienvenida al estudiante: {form.email}")
            student_html = create_student_welcome_html(form.name, form.courseTitle)
            send_email(
                subject=student_subject,
                recipients=form.email,
                context={},
                html_body_override=student_html,
                attachments=None
            )
            student_email_sent = True
            logger.info("Email de bienvenida enviado correctamente al estudiante.")
        except Exception as e:
            logger.error(f"FALLO al enviar email de bienvenida al estudiante: {e}", exc_info=True)
            if not first_error:
                first_error = e
    else:
         logger.warning("No se envió email de bienvenida: No se proporcionó email del estudiante.")

    # Final response logic
    if admin_email_sent or student_email_sent:
        return {"message": "Enrollment processed. Payment redirection initiated."}
    elif first_error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error interno al procesar los emails de matrícula: {first_error}"
        )
    else:
        logger.error("Situación inesperada: No se enviaron emails de matrícula pero no se capturó error.")
        raise HTTPException(
             status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
             detail="Error inesperado al procesar los emails de matrícula."
         )

# Optional: Add a root endpoint for testing
@app.get("/")
async def root():
    return {"message": "AEDIA Email API is running"}

# If running directly (for testing, usually use uvicorn)
if __name__ == "__main__":
     import uvicorn
     uvicorn.run(app, host="0.0.0.0", port=8000) 
