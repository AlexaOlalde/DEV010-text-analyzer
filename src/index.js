import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
// Selectores del DOM

//Estas variables son para seleccionar elementos del DOM utilizando el método querySelector y se usan después en el código para actualizar el contenido de la página.
const userInput = document.querySelector('textarea');
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpaces = document.querySelector('[data-testid="character-no-spaces-count"]');
//const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordAverage = document.querySelector('[data-testid="word-length-average"]');

//Estas variables almacenan los valores calculados a partir del texto que las usuarias ingresan en la textarea y después se usan para actualizar el contenido de los elementos del DOM seleccionados anteriormente.
userInput.addEventListener('keyup', updateMetrics);
function updateMetrics() {
  const text = userInput.value;
  const wordCountVal = analyzer.getWordCount(text);
  const characterCountVal = analyzer.getCharacterCount(text);
  const characterNoSpacesVal = analyzer.getCharacterCountExcludingSpaces(text);
  const numberCountVal = analyzer.getNumberCount(text);
  const numberSumVal = analyzer.getNumberSum(text);
  const wordAverageVal = analyzer.getAverageWordLength(text);
  
  wordCount.textContent = ` ${wordCountVal}`;
  characterCount.textContent = ` ${characterCountVal}`;
  characterNoSpaces.textContent = ` ${characterNoSpacesVal}`;
  numberCount.textContent = ` ${numberCountVal}`;
  numberSum.textContent = ` ${numberSumVal}`;
  wordAverage.textContent = ` ${wordAverageVal}`;
}
/*Se pasa el argumento adecuado para cada función. En casi todas va text porque estas funciones recibiran un texto como argumento. La función getNumberSum espera un arreglo de números como argumento y por eso se le pone numbers.*/
const resetbutton = document.getElementById('reset-button');
resetbutton.addEventListener('click', () => {
  userInput.value = '';
  wordCount.textContent = '';
  characterCount.textContent = '';
  characterNoSpaces.textContent = '';
  numberCount.textContent = '';
  numberSum.textContent = '';
  wordAverage.textContent = '';
});



/*function calcular(elemento) {
getWordCount(elemento);
getCharacterCount(elemento);
getCharacterCountExcludingSpaces(elemento);
getAverageWordLength(elemento);
getNumberCount(elemento);
getNumberSum(elemento);
}*/

//function actualizarContabilizador() {
//const texto = textarea.value;
//const palabras = texto.split(/\s+/).filter(word => word !== "");}
  
/*let words;
  if (text.match(/\b\p{L}+\b/gu)) {
  }
  
  let characters;
  if (text.length > 0) {
  } else {
    characters = 0;
  }
  
  let charactersNoSpaces;
  if (text.length > 0) {
  } else {
    charactersNoSpaces = 0;
  }

  let numbers;
  if (text.match(/\d+/g)) {
  } else {
    numbers = 0;
  }

  let numbersSum;
  if (numbers.length > 0) {
  } else {
    numbersSum = 0;
  }

  let wordLengths;
  if (words.length > 0) {
  } else {
    wordLengths = 0;
  }

  let wordLengthsSum;
  if (wordLengths.length > 0) {
  } else {
    wordLengthsSum = 0;
  }

  let wordLengthsAverage;
  if (wordLengths.length > 0) {
  } else {
    wordLengthsAverage = 0;
  }*/


/*wordCount.textContent = ` ${analyzer.getWordCount(words)}`;
  characterCount.textContent = ` ${analyzer.getCharacterCount(characters)}`;
  characterNoSpacesCount.textContent = ` ${analyzer.getCharacterCountExcludingSpaces(text)}`;
  numberCount.textContent = ` ${analyzer.getNumberCount(text)}`;
  numberSum.textContent = ` ${analyzer.getNumberSum(text)}`;
  wordLengthAverage.textContent = ` ${analyzer.getAverageWordLength(text)}`;
});*/



/*function limpiarMetricas(){
  document.querySelector('["name=user/input"]').value = "";
  const  = { value: ""};
  displayWordCount();
  displayCharacterCount()
  displayNumbersCount()
  displayCharacterCountExcludingSpaces()
  displayNumbersSum()
  displayAverageWordLength()
}*/

//function getWordCount(elemento) {let resultado = analyzer.getWordCount (elemento);
//let liCollection = document.querySelector('')
//}

//const textarea = document.querySelector('[name = "user/input"]');
//textarea.addEventListener("keyup", function () {
//calcular(textarea);
//})