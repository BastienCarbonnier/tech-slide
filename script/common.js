const repository_name = 'tech-slides';

const themes = [
  {
    id: "maplr",
    label: "Maplr",
    logo: "../../assets/logo-maplr.png",
    colors: {
      background: '#223B5C',
      title: '#FC0706'
    }
  },
  {
    id: "intact-lab",
    label: "Intact Lab",
    logo: undefined, 
    colors: {
      background: '#e3f0f1',
      title: '#1db5be'
    }
  },
  {
    id: "portfolio",
    label: "Portfolio",
    logo: undefined,
    colors: {
      background: '#223B5C',
      title: '#FC0706'
    }
  },
];

const presentations = [
  {
    id: "keycloak",
    title: "Keycloak présentation",
    description: "Présentation sur Keycloak et l'authentification en général.",
    logo: "https://www.keycloak.org/resources/images/keycloak_logo_200px.svg"
  },
  {
    id: "k6",
    title: "K6 présentation",
    description: "Présentation sur K6 et les tests de montées en charge.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/K6-logo.svg"
  }
];

let origin = window.location.origin;
if (window.location.href.includes(repository_name)) {
  origin = origin + '/' + repository_name;
}