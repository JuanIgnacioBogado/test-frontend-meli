Resolución del challenge frontend y backend para Mercado Libre.

A continuación paso a dejar algunas notas para poder entender el proyecto.

## Backend Notas:

-   En cuanto a los endpoints, seguí las instrucciones solicitadas, aunque encuentro que algunas de las soluciones que implementé se pueden mejorar.
    Como por ejemplo:
    Una de las consignas era que en la consulta se devolvieran un máximo de 4 productos. Para esto la solución más limpia y correcta hubiera sido agregarle un query param extra que permite la api de meli, ?limit=4. Pero como en el enunciado se pedía que se hiciera la consulta de cierta manera, opte por hacer un slice para respetar eso. Quiero dejar aclarado esto porque creo que la mejor solución hubiera sido esa la del limit.

-   Otra cosa que asumí es que en el author donde pedía name y lasname tenía que poner mi firma.

-   En cuanto a los datos solicitados, se respeto todo. Así que en el frontend, el componente de breadcrumb solo se muestra cuando se hace una consulta hacia productos y no cuando se hace a uno individualmente. Ya que no se pedía que el server devuelva las categorías por item. Desde el front lo manejo por estado así que visualmente se muestra salvo que se recargue la pantalla en la vista de detalle.

-   Respecto a la estructura del proyecto, al margen de que sea un servidor chico para consultar la api de meli, traté de hacerlo lo más separado y prolijo posible teniendo en cuanta, términos de escalabilidad.

-   Como nota extra, estoy acostumbrado en el día a día a usar la librería de lodash, ya que tiene muchas utilidades y evita ciertos errores en el código que con las funciones nativas suelen ocurrir, haciendo que explote el código. Pero en este caso opte por usar todo nativo, aunque lo más seguro es que en un proyecto real, prefiera de lodash antes vanilla js (lo mismo del lado del frontend).

## Frontend Notas:

-   En la estructura del proyecto, react permite total libertad, así que trate de seguir un order estandarizado para tener en cuenta escalabilidad y mantenimiento. En este caso use Vite para el boilerplate. También opté por agregar un jsconfig.json ya que es muy cómodo trabajar con alias así las importaciones no se hacen super largas. Al margen de eso, soy consiente de que se puede mejorar mucho más todavía la estructura, pero al ser un proyecto chico de momento creo que está bien.

-   En cuanto a las vistas, tube cierto problema para replicar lo que se pedía en la ruta ​“/items?search=” ya que no lo pude hacer andar exactamente así con la versión 6 de react-router-dom. Asi que hice un par de validaciones por detrás para que se pueda acceder solo de esa manera, sino se redirecciona al inicio. Menciono esto porque seguro que haya una mejor forma de hacerlo.

-   Algo que no me termino de convencer es que en los assets que me proporcionaron (los ejemplos del pdf), hay datos que aparecen pero que no los pidieron desde el backend, entonces los van a ver hardcodeado en el lado del frontend (ejemplo: el icono verde de envío, y la zona del vendedor "capital federal"). Se que esos datos están disponibles en la api, y los pude haber retornado al front pero como no se requería en la consigna opte por dejarlo así de momento. Pero si se llegara a requerir solo me avisan y aplico el dinamismo en esa parte.

-   En cuanto a los ejemplos traté de seguirlo lo más posible, pero es un poco más incómodo a tener un figma con datos exactos. Así que de seguro encuentren diferencias sutiles en el front. Pude encontrar la font family que usan así que la agregue al proyecto. En temas de margenes y paddings, en algunas zonas le agregue un poco más porque sino el diseño se veía un poco feo.

-   Agregué un loading con un emptyState, ambos muy básicos, pudiéndose mejorar para reutilizarlos. Usé context para mejor manejo de estado.

-   En cuanto a la funcionalidad, en el input se detecta si es que se busca un producto por el texto o si se ingresa un ID válido de MLA. Así que pueden probar ambas cosas.


## Nota General
Dejé los .env de ejemplo para poder levantar ambos proyectos localmente y probarlos. De momento los voy a subir así a github para que lo puedan probar y ver.
Pero en cuanto pueda lo subo a github-pages así no es necesario clonarlo para probarlo. Como este proyecto requiere de un mini servidor voy a probar de subirlo a heroku. De momento lo dejo así y cuando tenga la url lo dejo acá en el README.

## Backend
* Definir puerto a usar en el backend, preferentemente distinto al del cliente.
PORT=4000
* npm run dev para levantarlo.

## Frontend
* El archivo .env de un proyecto en vite tiene que tener por nombre .env.local ademas de comenzar el nombre de la variable con VITE_
* Definir la variable de entorno como se muestra a continuación, y colocar la url del servidor ya sea local o desplegado.
VITE_SERVER_URL=http://localhost:4000/api

npm run dev o yarn dev para levantarlo.
Y para probarlo en modo productivo hacer npm run build o yarn build, y luego yarn preview o npm preview para levantarlo localmente.
