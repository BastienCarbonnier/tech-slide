$(document).ready(function () {
  let themes_html = "";
  themes.forEach((theme) => {
    themes_html +=
      '<option value="' +
      theme.id +
      "-${presentation_id}" +
      '">' +
      theme.label +
      "</option>";
  });

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
          .replace("${themes}", themes_html)
          .replaceAll("${presentation_id}", presentation.id);
        cards += presentation_card;
      });
      document.getElementById("cards-list").innerHTML = cards;

      const btn_see_presentation = document.querySelector("#see-presentation");
      const theme_select = document.querySelector("#themes");

      btn_see_presentation.onclick = (event) => {
        event.preventDefault();
        const theme_selected_split = theme_select.value.split("-");
        goToPresentation(theme_selected_split[1], theme_selected_split[0]);
      };
    });
});

function goToPresentation(presentation, theme) {
  window.location.href =
    origin + "/presentations/" + presentation + "/?theme=" + theme;
}
