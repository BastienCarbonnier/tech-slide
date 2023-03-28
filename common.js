const themes = [
  {
    id: "maplr",
    label: "Maplr",
    logo: "../assets/logo-maplr.png",
  },
  {
    id: "intact",
    label: "Intact Lab",
    logo: undefined,
  },
  {
    id: "portfolio",
    label: "Portfolio",
    logo: undefined,
  },
];

const presentations = [
  {
    id: "keycloak",
    title: "Keycloak présentation",
    description: "Présentation sur Keycloak et l'authentification en général.",
  },
];

function getThemeForId(id) {
  return themes.find((theme) => theme.id === id);
}

const href = window.location.href.replace("index.html", "");
const presentationsUrl = href + "presentations/";

let theme_id = new URLSearchParams(window.location.search).get("theme");
theme_id = theme_id !== undefined ? theme_id : "portfolio";
const theme = getThemeForId(theme_id);

if (!!theme?.logo) {
  document.write(
    '<link rel="stylesheet" href="../dist/theme/' + theme.id + '.css">'
  );
}
