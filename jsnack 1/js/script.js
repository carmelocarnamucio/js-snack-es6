// Partendo da un array chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array;
//quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente


const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let newArray = [];

let num1 = parseInt(prompt("inserisci un numero da 0 e " + (myArray.length-1)));
let num2 = parseInt(prompt("inserisci un numero da 0 e " + (myArray.length-1)));


// se il num1 è maggiore di num2
  if (num1 > num2) {
    [num1, num2] = [num2, num1];
  }

newArray = myArray.filter((element, i) => {
  return num1 <= i && num2 >= i
});


console.log(myArray);
console.log(newArray);
