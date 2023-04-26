$(document).ready(function () {
  // We fetch card template and replace all value we need
  fetch("card_presentation.html")
    .then((response) => response.text())
    .then((card) => {
      let cards = "";

      presentations.forEach((presentation) => {
        let presentation_card = `${card}`;
        presentation_card = presentation_card
          .replace("${title}", presentation.title)
          .replace("${description}", presentation.description)
          .replace("${logo}", presentation.logo)
          .replaceAll("${presentation_id}", presentation.id);
        cards += presentation_card;
      });
      // Writing cards to page
      document.getElementById("cards-list").innerHTML = cards;

      // We add action to every button of cards
      presentations.forEach((presentation) => {
        let btn_see_presentation = document.querySelector('#see-presentation-' + presentation.id);

        btn_see_presentation.onclick = (event) => {
          event.preventDefault();
          console.log(event)
          let theme_select = document.querySelector("#themes");
          goToPresentation(presentation.id, theme_select.value);
        };
      })
    });
});

function goToPresentation(presentation, theme) {
  console.log(presentation);
  window.location.href =
    origin + "/presentations/" + presentation + "/?theme=" + theme;
}
