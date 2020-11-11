//1A: Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla Peso = 10
//1B: Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

const palla = {
  'nome' : 'palla',
  'peso' : 10
};

console.log(palla);

var nuovoPeso = parseInt(prompt('Quanto pesa la palla?'));

palla.peso = nuovoPeso;

console.log(palla);
