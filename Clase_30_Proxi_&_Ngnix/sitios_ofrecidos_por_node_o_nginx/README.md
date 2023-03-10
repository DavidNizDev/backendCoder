# SITIOS OFRECIDOS POR NODE O NGINX

Realizar un sitio web sencillo (con HTML, CSS y Javascript) que sea ofrecido en principio por el servidor de node.js del desafío anterior, utilizando el servicio de archivos estáticos de express.
Las instancias de Node.js continuarán corriendo con PM2 en modo watch para incorporar nuevos cambios.
Comprobar que el sitio web se vea correctamente desde las dos instancias de Node.js en su ruta raíz.
Luego cambiar la configuración de Nginx para que ofrezca el sitio realizado en su ruta raíz, desactivando en las instancias de Node.js el servicio estático de archivos.
Comprobar que ahora Nginx sea el que ofrezca el sitio web y no Node.js
