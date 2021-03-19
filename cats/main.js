// Definire un array di oggetti;
// ogni oggetto rappresenta un gatto, che è caratterizzato da:
// nome, età, colore e sesso.
// Tramite la funzione .forEach(),
// stampare in pagina tutti i gattini,
// ciascuno con il proprio colore e il proprio nome.


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
      eta: 4,
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
      nome: "Penny",
      eta: 7,
      colore: "Rosso",
      sesso: "Maschio"
    }
  ];

  gatti.forEach((item) => {
    $("#gatti").append(`<li>${item.nome} è di colore ${item.colore}</li>`);
  });
});
// stampo in pagina con forEach tutti i gattini(nome e colore)
