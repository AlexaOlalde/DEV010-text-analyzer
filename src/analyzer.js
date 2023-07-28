const analyzer = {  
  getWordCount: (text) => {
    if (text.trim() === '') {
      return 0;
    }

    const words = text.trim().split(/\s+/);
    return words.length;
    //const words = text.split(/\W+/g).filter(word => word !== "");
    //const words = text.match(/\b\p{L}+\b/gu) || [];
    //return words.length;
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCount: (text) => {
    return text.length;
    //const characters = text.length;
    //return characters;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const spaceRegex = /\s/g;
    const charactersWithoutSpaces = text.replace(spaceRegex, '');
    return charactersWithoutSpaces.length;
    //const charactersNoSpaces = text.replace(/\s/g, '').length;
    //return charactersNoSpaces;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const words = text.trim().split(/\s+/);
    if (words.length === 0) return 0;

    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    //const averageLength = totalLength / words.length;

    return parseFloat((totalLength / words.length).toFixed(2));


    /*const words = text.trim().split(/\s+/);
    if (words.length === 0) return 0;

    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    const averageLength = totalLength / words.length;

    return parseFloat((totalLength / words.length).toFixed(2));*/


    /*getAverageWordLength: (text) => {
  const words = text.split(/\W+/).filter(word => word !== "");
  const wordLengths = words.map(word => word.length);

  if (wordLengths.length === 0) {
    return 0;
  }
  const totalLength = wordLengths.reduce((acc, len) => acc + len, 0);
  const averageLength = totalLength / wordLengths.length;

  // Redondear a 2 decimales
  return parseFloat(averageLength.toFixed(2));
}*/

  
    /*const wordLengths = words.map(word => word.length);
    const wordLengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
    const wordLengthsAverage = wordLengths.length ? (wordLengthsSum / wordLengths.length).toFixed(2) : 0;
    return wordLengthsAverage*/
    //const wordLengths = text.replaceAll(" ", "").length;
  /*const wordLengths = words.map(word => word.length);
    const wordLengthsSum = wordLengths.reduce((acc, len) => acc + len, 0);
    const average = wordLengths/wordLengthsSum; 
    /*let wordLengthsAverage;
    for (let wordLengthsAverage = 0; wordLengthsAverage !== ''; wordLengthsAverage ++)
      if (wordLengths.length > 0) {
        wordLengthsAverage = (wordLengthsSum / wordLengths.length). toFixed(2);
      } else {
        wordLengthsAverage = 0;
      }*/ 
  //return wordLengthsAverage;
  //return parseFloat(average.toFixed(2));
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //const words = text.split(/W+?).filter(word => word !== "");
    //const wordLengths = words.map(word => word.length);
    //if (wordLengths.length === 0) {
    //return 0
    //}
  },
  getNumberCount: (text) => {
    const numberRegex = /\d+/g;
    const numbers = text.match(numberRegex);
    if (numbers === null) {
      return 0;
    }
    return numbers.length;
    
    //return numbers ? numbers.length : 0;    
    //const numbers = text.match(/\d+/g) || [];
    //return numbers;
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberSum: (text) => {
    const numberRegex = /\d+/g;
    const numbers = text.match(numberRegex);

    let sum = 0;
    if (numbers !== null) {
      for (let i = 0; i < numbers.length; i++) {
        sum += parseInt(numbers[i]);
      }
    }
    return sum;
    //const numberRegex = /\d+/g;
    //const numbers = text.match(numberRegex);
    //if (!numbers) return 0;
    //return numbers.reduce((sum, sumStr) => sum + parseInt(numStr), 0);
    //const numbersSum = text.match(/\b\d+(\.\d+)?\b/g);
    //let sum = 0; 
    //if (numbers !== null) {
    //for (let i = 0; i < numbers.length; i++) { 
    //sum += parseInt(numbers[i]); 
    //}
    //}
    //return sum;
    //const numbersSum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    //return numbersSum;
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  },
};

export default analyzer;