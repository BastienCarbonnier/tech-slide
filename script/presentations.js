function getThemeForId(id) {
  return themes.find((theme) => theme.id === id);
}

let theme_id = new URLSearchParams(window.location.search).get("theme");
theme_id = theme_id !== undefined ? theme_id : "portfolio";
var theme = getThemeForId(theme_id);