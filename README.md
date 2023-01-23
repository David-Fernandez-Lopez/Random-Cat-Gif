# **Random-Cat-Gif**

## **Introduction**

In this project we perform a small exercise that provides a solution to the following premise:


"*Given two APIs:*

*Select a data about cats using the first API.*
*From that data, use the first three words and search for a gif using the Giphy API.* 

*The result has to be displayed with an image on the left and the text on the right, all*
*centered vertically, along with a button that randomly generates a different piece of data.*
*Demonstrate your design skills by producing an attractive and intuitive component unit design.*

*Demonstrate your coding skills at all levels, from handling APIs to application code.* "

The exercise has been designed so that the API calls are made from the backend, in order to send to the frontend only the necessary information to be displayed.

The technologies used are: Express, Node.js and React.js.
__________________________________

## **BACKEND**

Relevant endpoints 

| Route | HTTP Verb | Description |
| --------------------------------------------------- | ---------- | ------------------------------- |
| `/api/` | GET | This route will return a json with the url of the gif and the fact obtained from the APIs |

We should have a *.env* file with the Giphy port, source and api key:

* PORT=XXXXXX
* ORIGIN=http://localhost:XXXX
* GIPHY_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

In the back, we can find:

* **Controllers**: in this folder we have the controller that will manage the response of our API.
* **Error-handling**: basic management of 404 and 500 errors.
* **Routes**: we will find the routes with the endpoints of our application.
* **Services**: services through which we make the calls to the two external APIs to obtain the requested data.
* **Utils**: utility function that will reduce the sentence to 3 words as requested in the exercise.

____________________________
## **FRONTEND**

We should have a *.env* file with the API url:

* REACT_APP_API_URL=http://localhost:XXXX *(must match the PORT indicated in the backend)*.


In the frontend (inside src), we can find:

* **Components**: Gif and Fact components, which will show the information collected from our API.
* **Pages**: here we will find our Homepage, where we will use the components.
* **Services**: service through which we make the call to our API.

In HomePage we store the data collected from the back in a state and with a button we update the information every time we want to obtain a new result.


____________________________________
____________________________________


## ***ESPAÑOL***

## **Introducción**

En este proyecto se realiza un pequeño ejercicio que da solución a la siguiente premisa:


" *Dadas dos APIs:*

*Selecciona un dato sobre gatos usando la primera API.*
*De ese dato, usa las tres primeras palabras y busca un gif usando la API de Giphy.*

*El resultado se tiene que mostrar con una imagen a la izquierda y el texto a la derecha, todo*
*centrado verticalmente, junto con un botón que genere otro dato distinto aleatoriamente.*
*Demuestra tus habilidades de diseño mediante la producción de un diseño de unidad de*
*componente atractivo e intuitivo.* 

*Demuestra tus habilidades de codificación en todos los niveles, desde el manejo de APIs hasta el código de la aplicación.* "

Se ha planteado el ejercicio de forma que las llamadas a las APIs se realicen desde el backend, para así 
enviar al frontend únicamente la información necesaria que deba ser mostrada.

Las tecnologías utilizadas son: Express, Node.js y React.js.
__________________________________

## **BACKEND**

Relevant endpoints 

| Route                                               | HTTP Verb  | Description                     |
| --------------------------------------------------- | ---------- | ------------------------------- |
| `/api/`                                             | GET        | Esta ruta devolverá un json con la url del gif y la frase obtenidas de las APIs |

Deberemos tener un archivo *.env* con el puerto, el origen y la api key de Giphy:

* PORT=XXXX
* ORIGIN=http://localhost:XXXX
* GIPHY_API_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

En el back, podemos encontrar:

* **Controllers**: en esta carpeta tenemos el controlador que gestionará la respuesta de nuestra API.
* **Error-handling**: gestión básica de errores 404 y 500.
* **Routes**: encontraremos las rutas con los endpoints de nuestra aplicación.
* **Services**: servicios a través de los que hacemos las llamadas a las dos APIs externas para obtener los datos solicitados.
* **Utils**: función utilitaria que reducirá la frase a 3 palabras tal y como se solicita en el ejercicio.

____________________________
## **FRONTEND**

Deberemos tener un archivo *.env* con la url de la API:

* REACT_APP_API_URL=http://localhost:XXXX *(deberá coincidir con el PORT indicado en el backend)*


En el front (dentro de src), podemos encontrar:

* **Components**: componentes Gif y Fact, que mostrarán la información recogida desde nuestra API.
* **Pages**: aquí encontraremos nuestra Homepage, donde utilizaremos los componentes.
* **Services**: servicio a través del que hacemos la llamada a nuestra API.

En HomePage almacenamos los datos recogidos desde el back en un estado y con un botón actualizamos la información cada vez que queremos obtener un nuevo resultado.



