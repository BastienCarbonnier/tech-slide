const themes = [
  {
    id: "maplr",
    label: "Maplr",
    logo: "./assets/logo-maplr.png",
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

let deep_path = '';
function setActualDeep() {
  const href = window.location.href;
  let deep = (href.match(/\//g) || []).length - 2;
  
  if (href.includes("tech-slides")) {
    deep = deep - 1;
  }
  let last_char_is_slash = href[href.length - 1] === "/";
  if (!last_char_is_slash) {
    let index_interrogation = href.indexOf('?');
    if (index_interrogation !== -1) {
      last_char_is_slash = href[index_interrogation-1] === "/";
    }
  }
  if ((last_char_is_slash && deep === 1) || deep === 0) {
    deep_path = './';
  } else {
    if (last_char_is_slash) {
      deep = deep - 1;
    }
    deep_path = '../'.repeat(deep);
  }
}
setActualDeep();

const href = window.location.href.replace("index.html", "");
const presentationsUrl = href + "presentations/";

let theme_id = new URLSearchParams(window.location.search).get("theme");
theme_id = theme_id !== undefined ? theme_id : "portfolio";
const theme = getThemeForId(theme_id);

document.write('<link rel="stylesheet" href="' + deep_path + 'dist/theme/' + theme.id + '.css">');
