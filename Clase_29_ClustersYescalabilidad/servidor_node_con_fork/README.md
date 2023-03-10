# SERVIDOR NODE CON FORK

## Servidor Node con Nodemon + fork

1. Realizar un servidor Node.js basado en express al que se le pase como parámetro el número de puerto de escucha. De no recibir este dato, el servidor iniciará en el puerto 8080.
2. Al ponerse en línea el servidor representará por consola el puerto de conexión y su número de proceso (pid).
3. En el endpoint raíz '/' deberá devolver un mensaje con el siguiente formato: 'Servidor express en (PORT) - PID (pid) - (fecha y hora actual)'

👉 Poner en marcha el servidor con node (sin nodemon) y verificar en el sistema operativo el proceso de node y su pid. Hacerlo con nodemon y ver la diferencia (constatar que nodemon crea un proceso padre forkeando a nuestro server). En ambos casos el puerto de escucha será el 8081.
