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

## P4

Mi predicción:
Creo que Express va a responder con un código de estado 404 (Not Found) cuando solicite la ruta /no-existe, porque en el código no se ha creado ninguna ruta para esa dirección.

Lo que pasó:
Al ingresar a http://localhost:3000/no-existe y revisar la pestaña Red/Network de las herramientas de desarrollador, Express respondió con el código de estado 404.

Por qué pasó:
Pasó porque Express no encontró una ruta que coincida con /no-existe. Cuando una ruta no está programada, Express responde automáticamente con 404, indicando que el recurso o la ruta solicitada no fue encontrada.


## P5 

Mi predicción:
Creo que el navegador se va a quedar cargando y no va a recibir ninguna respuesta, porque al comentar next(); la petición no podrá continuar hacia la ruta /.

Lo que pasó:
Al comentar next(); y solicitar /, el navegador se quedó cargando y no mostró la respuesta de “API Aventuras San Gil funcionando”. En la terminal sí apareció el registro del middleware con la hora, el método GET y la ruta /.

Por qué pasó:
Pasó porque next() permite que la petición continúe hacia el siguiente middleware o hacia la ruta correspondiente. Al quitarlo, la petición queda detenida en ese middleware y nunca llega a app.get('/').

## P6

-Mi predicción:

Creo que al solicitar `GET /actividades/1` voy a recibir un código de estado **200 OK**, porque la actividad con ID 1 sí existe en el arreglo. Sin embargo, como `req.params.id` llega como texto y el `id` de cada actividad es un número, la comparación no va a coincidir y el body de la respuesta será `undefined` o aparecerá vacío.

-Lo que pasó:

Al realizar la petición, la terminal mostró que el parámetro `id` llega como texto (`'1'`). Por eso, la búsqueda no encontró la actividad y la respuesta no devolvió el objeto esperado.

-Por qué pasó:

El problema ocurrió porque `req.params.id` es una cadena de texto, mientras que `a.id` es un número. Al utilizar el operador `===`, JavaScript compara tanto el valor como el tipo de dato, por lo que `'1'` no es igual a `1`. Para solucionarlo, se utiliza `Number(req.params.id)` antes de buscar la actividad.


## P7

-Mi predicción:

Creo que al borrar la palabra `return` y solicitar `/actividades/99`, el cliente recibirá primero una respuesta con código **404**, indicando que la actividad no existe. Después, como la función continúa ejecutándose, intentará enviar una segunda respuesta y se producirá un error en la terminal.

-Lo que pasó:

Al realizar la petición, el cliente recibió el mensaje de que no existe la actividad con ID 99. En la terminal apareció un error relacionado con el intento de enviar una segunda respuesta para la misma petición.

-Por qué pasó:

Esto ocurrió porque `res.status(404).json()` envía una respuesta, pero no detiene la ejecución de la función. Al quitar `return`, el código continúa y llega a `res.json(actividad)`, intentando responder otra vez. Para evitar este problema, se debe utilizar `return` antes de enviar la respuesta de error.


## P8

-Mi predicción:

Petición: `GET /actividades?tipo=agua`:** creo que responderá con código 200 y mostrará las actividades cuyo tipo sea `agua`: Rafting en el río Fonce y Torrentismo en cascada.

Petición: `GET /actividades?tipo=AGUA`:** creo que responderá con código 200, pero devolverá una lista vacía (`[]`), porque el código compara los textos teniendo en cuenta las mayúsculas y minúsculas.

Petición: `GET /actividades?tipo=fuego`:** creo que responderá con código 200 y una lista vacía (`[]`), porque la ruta `/actividades` sí existe, pero no hay actividades registradas de tipo `fuego`.

-Lo que pasó:

Al probar las tres peticiones, el filtro `agua` devolvió dos actividades, `AGUA` devolvió una lista vacía y `fuego` también devolvió una lista vacía.

-Por qué pasó:

El filtro utiliza `a.tipo === tipo`, que compara los textos distinguiendo entre mayúsculas y minúsculas. Por eso, `agua` y `AGUA` no coinciden. En cambio, cuando se consulta `fuego`, la ruta sí existe, pero no encuentra actividades que cumplan la condición. Por eso responde con código 200 y una lista vacía, en lugar de 404, que se utiliza cuando la ruta solicitada no existe.