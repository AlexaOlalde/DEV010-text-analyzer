import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
// Selectores del DOM

//Estas variables son para seleccionar elementos del DOM utilizando el método querySelector y se usan después en el código para actualizar el contenido de la página.
const userInput = document.querySelector('textarea');
const wordCount = document.querySelector('[data-testid="word-count"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const wordLengthAverage = document.querySelector('[data-testid="word-length-average"]');

//Estas variables almacenan los valores calculados a partir del texto que las usuarias ingresan en la textarea y después se usan para actualizar el contenido de los elementos del DOM seleccionados anteriormente.
userInput.addEventListener('keyup', () => {
  const text = userInput.value;
  const words = text.match(/\b\p{L}+\b/gu) || [];
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;
  const numbers = text.match(/\d+/g) || [];
  const numbersSum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
  const wordLengths = words.map(word => word.length);
  const wordLengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
  const wordLengthsAverage = wordLengths.length ? (wordLengthsSum / wordLengths.length).toFixed(2) : 0;

  wordCount.textContent = ` ${words.length}`;
  characterCount.textContent = ` ${characters}`;
  characterNoSpacesCount.textContent = ` ${charactersNoSpaces}`;
  numberCount.textContent = ` ${numbers.length}`;
  numberSum.textContent = ` ${numbersSum}`;
  wordLengthAverage.textContent = ` ${wordLengthsAverage}`;
});
/*Se pasa el argumento adecuado para cada función. En casi todas va text porque estas funciones recibiran un texto como argumento. La función getNumberSum espera un arreglo de números como argumento y por eso se le pone numbers.*/
const resetbutton = document.getElementById('reset-button');
resetbutton.addEventListener('click', () => {
  userInput.value = '';
  wordCount.textContent = '';
  characterCount.textContent = '';
  characterNoSpacesCount.textContent = '';
  numberCount.textContent = '';
  numberSum.textContent = '';
  wordLengthAverage.textContent = '';
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