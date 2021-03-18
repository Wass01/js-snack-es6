// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

$(document).ready(function() {
  const bici = [
    {
      nome: "città",
      peso: 6
    },
    {
      nome: "mountain bike",
      peso: 7
    },
    {
      nome: "bmx",
      peso: 5
    },
    {
      nome: "corsa",
      peso: 3
    },
    {
      nome: "graziella",
      peso: 4
    }
  ];

  let biciLeggera = bici[0].peso;
  let index = 0;
  for (let i = 1; i < bici.length; i++) {
    if (bici[i].peso < biciLeggera) {
      const{peso} = bici[i];
      biciLeggera = peso;
      index = i;
    }
  }

  console.log(`la bici più leggera è ${bici[index].nome} ed il suo peso è ${biciLeggera}`);

});
