// milestone 1
// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto, che è caratterizzato da:
// nome, età, colore e sesso.
// Tramite la funzione .forEach(),
// stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.

// Milestone 2
// Dividere i gatti in due contenitori distinti in base al sesso
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa,
// se femmina, o di blu, se maschio.
// Il colore del fiocco deve essere più tenue se il gatto è più giovane,
// più scuro se il gatto è più vecchio.


$(document).ready(function() {
  // definisco array di oggetti gatti
  const gatti = [
    {
      nome: "Tom",
      eta: 9,
      colore: "Arancione",
      sesso: "Maschio"
    },
    {
      nome: "Jack",
      eta: 2,
      colore: "Bianco",
      sesso: "Maschio"
    },
    {
      nome: "Cloe",
      eta: 3,
      colore: "Nero",
      sesso: "Femmina"
    },
    {
      nome: "Pina",
      eta: 12,
      colore: "Marrone",
      sesso: "Femmina"
    },
    {
      nome: "Mike",
      eta: 6,
      colore: "Rosso",
      sesso: "Maschio"
    }
  ];

  // stampo in pagina con forEach tutti i gattini(nome e colore)
  gatti.forEach((item) => {
    $("#gatti").append(`<li>${item.nome} è di colore ${item.colore}</li>`);
  });

  // creo due variabili che dividono il sesso e le faccio filtrare
  const maschio = gatti.filter((item) => {return item.sesso == "Maschio"});
  const femmina = gatti.filter((item) => {return item.sesso == "Femmina"});

  maschio.forEach((item) => {
    $("#gatti-fiocco").append(`<li id="${item.nome}" class="azzurro giovane">${item.nome} è ${item.sesso} <i class="fas fa-ribbon"></i></li>`);
    // verifico età e assegno opacità
    if (item.eta > 7) {
      $("#"+item.nome).removeClass("giovane");
    }
  });


  femmina.forEach((item) => {
    $("#gatti-fiocco").append(`<li id="${item.nome}" class="rosa giovane">${item.nome} è ${item.sesso} <i class="fas fa-ribbon"></i></li>`);
    // verifico età e assegno opacità
    if (item.eta > 7) {
      $("#"+item.nome).removeClass("giovane");
    }
  });

});
