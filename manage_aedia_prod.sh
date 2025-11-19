#!/bin/bash

# Script de gestión para servicios AEDIA en producción (systemd)

show_help() {
    echo "=== GESTIÓN DE SERVICIOS AEDIA (PRODUCCIÓN) ==="
    echo ""
    echo "Uso: $0 [comando]"
    echo ""
    echo "Comandos disponibles:"
    echo "  start     - Iniciar todos los servicios"
    echo "  stop      - Detener todos los servicios"
    echo "  restart   - Reiniciar todos los servicios"
    echo "  status    - Mostrar estado de servicios"
    echo "  logs      - Mostrar logs en tiempo real"
    echo "  build     - Hacer build del frontend y actualizar"
    echo "  update    - Actualizar frontend (build + reload)"
    echo "  help      - Mostrar esta ayuda"
    echo ""
}

start_services() {
    echo "Iniciando servicios AEDIA..."
    systemctl start aedia-backend.service
    systemctl start nginx
    echo "Servicios iniciados"
}

stop_services() {
    echo "Deteniendo servicios AEDIA..."
    systemctl stop aedia-backend.service
    echo "Nota: nginx se mantiene corriendo para otros servicios"
    echo "Servicios detenidos"
}

restart_services() {
    echo "Reiniciando servicios AEDIA..."
    systemctl restart aedia-backend.service
    systemctl reload nginx
    echo "Servicios reiniciados"
}

show_status() {
    echo "=== ESTADO DE SERVICIOS AEDIA ==="
    echo ""
    echo "Backend:"
    systemctl status aedia-backend.service --no-pager -l
    echo ""
    echo "Nginx:"
    systemctl status nginx --no-pager -l
}

show_logs() {
    echo "Mostrando logs en tiempo real..."
    echo "Presiona Ctrl+C para salir"
    echo ""
    journalctl -u aedia-backend.service -f
}

build_frontend() {
    echo "Haciendo build del frontend..."
    cd /root/AEDIAWEB
    
    # Instalar dependencias si es necesario
    npm install
    
    # Hacer build
    npm run build
    
    # Copiar archivos buildados
    sudo cp -r dist/* /var/www/aedia/
    
    echo "Build completado"
}

update_frontend() {
    echo "Actualizando frontend..."
    build_frontend
    echo "Recargando nginx..."
    systemctl reload nginx
    echo "Frontend actualizado"
}

# Procesar argumentos
case "$1" in
    start)
        start_services
        ;;
    stop)
        stop_services
        ;;
    restart)
        restart_services
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    build)
        build_frontend
        ;;
    update)
        update_frontend
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo "Error: Comando no válido"
        echo ""
        show_help
        exit 1
        ;;
esac 