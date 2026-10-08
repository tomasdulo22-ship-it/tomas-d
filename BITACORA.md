## P0
Mi predicción:
Cuando abro una página en el navegador, el cliente es el navegador porque es quien realiza la petición. El servidor es el programa que está ejecutándose y recibe esa petición. En la entrada viajan datos como el método de la petición, la URL y los headers, y en algunos casos también un body. En la salida el servidor envía una respuesta que contiene un código de estado, headers y un body con información como texto, JSON o HTML.
Lo que pasó:
Al abrir una página, el navegador realizó una petición al servidor y el servidor procesó esa petición y devolvió una respuesta que el navegador pudo mostrar.
Por qué pasó:
Porque el funcionamiento de un servidor web sigue el modelo Entrada → Proceso → Salida. La petición es la entrada, el código del servidor procesa lo recibido y la respuesta es la salida.

## P1
Mi predicción:
Creo que al abrir /, /hola y /lo-que-sea voy a recibir la misma respuesta: Hola desde el servidor.
Lo que pasó:
En las tres direcciones recibí la respuesta Hola desde el servidor.
Por qué pasó:
Porque en este momento el servidor no tiene diferentes condiciones para distinguir las rutas. Cada vez que recibe una petición ejecuta res.end('Hola desde el servidor'), sin importar cuál sea la URL solicitada.

## P2
Mi predicción:
Creo que al abrir una sola página aparecerá una línea en la terminal indicando que llegó una petición, mostrando también el método y la URL solicitada.
Lo que pasó:
Al abrir la página apareció en la terminal una línea indicando la petición realizada, por ejemplo Llegó una petición: GET /. La URL que apareció correspondió a la página que solicité.
Por qué pasó:
Porque la función que recibe las peticiones se ejecuta cada vez que llega una petición al servidor y el console.log muestra el método y la URL de esa petición.

## P3
Mi predicción:
Si solicito /actividades/ con el slash al final, creo que el servidor responderá Ruta no encontrada con código 404. Si solicito /ACTIVIDADES, también creo que responderá Ruta no encontrada con código 404.
Lo que pasó:
Al solicitar /actividades/ recibí Ruta no encontrada con código 404. Al solicitar /ACTIVIDADES también recibí Ruta no encontrada con código 404.
Por qué pasó:
Porque el servidor solamente tiene programada exactamente la ruta GET /actividades. La comparación de la URL distingue tanto el slash adicional al final como las letras mayúsculas y minúsculas. Por eso /actividades/ y /ACTIVIDADES no coinciden con /actividades y entran en la condición else, donde se establece el código 404.