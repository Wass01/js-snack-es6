// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

$(document).ready(function() {
  const squadre = [
    {
      nome: "Milan",
      punti: 0,
      falli: 0
    },
    {
      nome: "Bayer Monaco",
      punti: 0,
      falli: 0
    },
    {
      nome: "Chelsea",
      punti: 0,
      falli: 0
    },
    {
      nome: "PSG",
      punti: 0,
      falli: 0
    }
  ];

  let newDati = []

  for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomNumber(0, 100);
  squadre[i].falli = randomNumber(0, 100);

  const {nome, falli} = squadre[i];
  newDati.push(nome, falli);
}

  console.log(newDati);

});


// functions
function randomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) {
    console.log("Non sono numeri");
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
