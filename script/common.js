const repository_name = 'tech-slides';

const themes = [
  {
    id: "maplr",
    label: "Maplr",
    logo: "../../assets/logo-maplr.png",
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

let origin = window.location.origin;
if (window.location.href.includes(repository_name)) {
  origin = origin + '/' + repository_name;
}