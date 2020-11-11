//jsnack 2
//dato questo array di obj iniziale:
//var arrayObj = [
//  {name: 'Poppy', type: 'tshirt', color: 'red'},
//  {name: 'Jumping', type: 'occhiali', color: 'blue'},
//  {name: 'CrissCross', type: 'scarpe', color: 'black'},
//  {name: 'Jenny', type: 'borsa', color: 'pink'},
//];
//Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
//una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale

// array di partenza
const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];

//variabili
const arrayCopy = [];
const randomLetter = "abcdefghijklmnopqrstuvwxyz";

//ciclo for each
arrayObj.forEach((element) => {
  const newObj = {...element, position: randomLetter[Math.floor(Math.random() * randomLetter.length)]};
  arrayCopy.push(newObj);
});

console.log(arrayObj);
console.log(arrayCopy);
