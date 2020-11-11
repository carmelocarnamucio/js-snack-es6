//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

const bici = [
  {
    'nome': 'bici1',
    'peso': 11
  },

  {
    'nome': 'bici2',
    'peso': 94
  },

  {
    'nome': 'bici3',
    'peso': 80
  },

  {
    'nome': 'bici4',
    'peso': 14
  },

  {
    'nome': 'bici5',
    'peso': 5
  }
];

let piuLeggera = bici[0];
bici.forEach (element => {

  if (bici[i].peso < piuLeggera.peso) {
    piuLeggera = element;
  }

}

console.log(piuLeggera.nome + ' è la più leggera! Pesa ' + piuLeggera.peso + ' kg')
