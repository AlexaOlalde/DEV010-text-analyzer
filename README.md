## Text Analyzer

 **¿Qué es un Text Analyzer (TA) o Analizador de Texto?**
Esta es una herramienta fácil de usar que permite analizar un texto a partir del conteo de diversos elementos de un texto. Para nuestro primer proyecto, el TA hace el recuento de lo siguiente:
 - **Palabras**: la aplicación debe poder contar el número de palabras en el texto de entrada y mostrar este recuento a las usuarias.
 - **Recuento de caracteres**: la aplicación debe poder contar el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación, y mostrar este recuento a las usuarias.
 - **Conteo de caracteres sin espacios**: la aplicación debe poder contar el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación, y mostrar este recuento a las usuarias.
 - **Conteo de números**: la aplicación debe contar cúantos números hay en el texto de entrada y mostrar este recuento a las usuarias.
 - **Suma de números**: la aplicación debe sumar todos los números que hay en el texto de entrada y mostrar el resultado a las usuarias.
 - **Longitud promedio**: la aplicación debe calcular la longitud media de las palabras en el texto de entrada y mostrársela a las usuarias.

## Índice
 1. Vista preliminar del TA
 2. Trabajos preliminares
 3. Características del proyecto 
 4. Tecnologías usadas 
 5. Recursos útiles
 
 ## 1. Vista preliminar
 A continuación se muestran las vistas previas de la interfaz del TA. 
 *Imagen 1. Vista del TA sin texto*
<a href="https://ibb.co/6vdw9Hx"><img src="https://i.ibb.co/jVpf0y2/vista-preliminar-1.png" alt="vista-preliminar-1" border="0"></a>

 *Imagen 2. Vista del TA con texto alfanumérico y sus métricas correspondientes.*
 <a href="https://ibb.co/T2cFz5H"><img src="https://i.ibb.co/PjxfB85/vista-preliminar-2.png" alt="vista-preliminar-2" border="0"></a>

*Video 1. Demostración del uso en tiempo real del TA.*
<iframe width="640" height="337" src="https://www.loom.com/embed/26e4bfcb682d4f4ca1152909aa0b757f?sid=2beaa1df-8786-41a8-993e-d1169686b989" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## 2. Trabajos preliminares

Antes de comenzar, se realizó un prototitpo de baja fidelidad en Excalidraw, diseño que al final del proyecto terminó modificándose en algunas especificaciones, como la alineación del botón que limpia las métricas, la apareincia de los títulos de las métricas y la posición en la que aparecen estas últimas, ya que en el prototipo se muestran arriba de los títulos y en la interfaz final quedaron seguidas de ellos.

*Imagen 3. Prototipo de baja fidelidad*
<a href="https://ibb.co/N3jj1yG"><img src="https://i.ibb.co/Ct77JHS/Prototipo-baja-fidelidad.png" alt="Prototipo-baja-fidelidad" border="0"></a>

Una vez que se tuvo en mente cómo luciría el proyecto, se decidió comenzar con la gestión del tiempo y la organización, para ello, se creo un dashboard en Trello, el cual contenía todos los OA's que se mencionaban en el README DEV010-text-analyzer, con el propósito de ayudar a la creación correcta del código mediante cards en las que se iban señalando lo que tenía **Por hacer**, **Haciendo**, **En pausa** y **Terminado**.
<a href="https://ibb.co/Btq5gB8"><img src="https://i.ibb.co/R9zkCcL/trello-desarrollo.png" alt="trello-desarrollo" border="0"></a>
En el siguiente video se muestra la forma en la que se gestiona lo antes dicho.

*Video 2. Trello*
<iframe width="640" height="265" src="https://www.loom.com/embed/75b016ca6f7e4f52b2a703ccf58a7d9c?sid=9ce23e1a-a872-42df-99f1-fa9c161bf2fb" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

## 3. Características del proyecto
El proyecto TA se realizó con base en el [README DEV010-text-analyzer](https://github.com/AlexaOlalde/DEV010-text-analyzer/blob/main/README.md#5-criterios-de-aceptaci%C3%B3n-m%C3%ADnimos-del-proyecto) proporcionado por Laboratoria. Dicho documento contiene diferentes, entre otras cosas, los [Criterios de aceptación mínimos del proyecto](https://github.com/AlexaOlalde/DEV010-text-analyzer/blob/main/README.md#5-criterios-de-aceptaci%C3%B3n-m%C3%ADnimos-del-proyecto) de los cuatro elementos principales del TA: **index.html, analyzer.js, index.js y style.css** y que pueden observarse a detalle en el link  de arriba. En dicho documento también se mencionan los tests que deben hacerse por parte de la Dev y la subida del proyecto a las Github Pages y así, poder continuar con las siguientes fases
En cuanto al código, tenemos que son cuatro los que la Dev debe crear para dar vida a la app y que se mencionan con anterioridad. A continuación se podrán observar los links que nos dirigen a dichos códigos:

 - [index.html](https://github.com/AlexaOlalde/DEV010-text-analyzer/blob/main/src/index.html) (uso de HTML semántico).
 - [index.js](https://github.com/AlexaOlalde/DEV010-text-analyzer/blob/main/src/index.js) (tipos de daros primitivos, strings, variables, uso de condicionales, uso de loops, funciones, módulos de ECMAScript (ES Modules), uso de linter (ESLINT) y uso de identificadores descriptivos (Nomenclatura y Semántica).
 - [analyzer.js](https://github.com/AlexaOlalde/DEV010-text-analyzer/blob/main/src/analyzer.js) (getWordCount(text), getCharacterCount(text), getCharacterCountExcludingSpaces(text), getAverageWordLength(text), getNumberCount(text) y getNumberSum(text)).
 - [style.css](https://github.com/AlexaOlalde/DEV010-text-analyzer/blob/main/src/style.css) (uso de selectores de CSS y modelo de caja (box model): border, margen, padding).
Los tests que debían correrse y salir sin fallos, son los siguientes: `npm run test`, `npm run test:oas` y `npm run test:e2e`, los cuales después de varios intentos y resolución de errores, todos fueron realizados con éxito.

## 4. Tecnologías usadas
Para este proyecto se usaron las siguientes:
-   HTML5: es la que proporciona la estructura básica de la aplicación.
-   CSS3: esta tecnología define el diseño y estilo visual de la aplicación.
-   JavaScript: implementa la funcionalidad para analizar el texto ingresado y mostrar los resultados.
Además de estas, que fueron usadas directamente para la creación del código, también se hizo uso de [ImgBB](https://imgbb.com/), [Trello](https://www.trello.com), [Loom](https://www.loom.com), [Stackedit](https://www.stackedit.io), [Excalidraw](https://excalidraw.com) y [ColorSpace](https://mycolor.space/).

## 5. Recursos útiles
[HTML semántico-Laboratoria](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html), [HTML DOM Document getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp), [Box Model](https://cssreference.io/box-model/), [String](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String), [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions), [element.addEventListener](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener), [Condicionales JS](https://www.youtube.com/watch?v=yzsiqrWD4SM&ab_channel=TodoCode) y [Flexbox](https://www.youtube.com/watch?v=Y6yviDqdMc8&t=472s&ab_channel=AlexCGDesign)