let theme = new URLSearchParams(window.location.search).get('theme');
theme = theme !== undefined ? theme : 'portfolio';

const logo_by_theme = {
  'maplr': '../assets/logo-maplr.png'
};

let logo = logo_by_theme[theme];
if (!!logo) {
  document.write('\
				<link rel="stylesheet" href="../dist/theme/' + theme + '.css">\
			');
}

const href = window.location.href.replace('index.html', '');
const presentationsUrl = href + 'presentations/';