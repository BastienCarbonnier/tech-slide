let theme_id = new URLSearchParams(window.location.search).get("theme");
theme_id = theme_id !== undefined ? theme_id : "portfolio";
var theme = themes.find((theme) => theme.id === theme_id);