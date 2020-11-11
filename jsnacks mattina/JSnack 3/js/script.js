//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti

const squadre = [
  {
    'nome' : 'squadra1',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra2',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra3',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra4',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra5',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra6',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  },
  {
    'nome' : 'squadra7',
    'punti_fatti' : 0,
    'falli_subiti' : 0
  }
];


squadre.forEach((element, i) => {
  squadre[i].punti_fatti = randomNum(120);
  squadre[i].falli_subiti = randomNum(200);
});

console.log(squadre);

//funzione

function randomNum(max){
  var x = Math.floor(Math.random()* max) + 1 ;
  return x;
};
