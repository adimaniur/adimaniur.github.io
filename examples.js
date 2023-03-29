var activePage = 'home';
var homePage = document.getElementById(activePage);

homePage.style.display = 'block';

function showSkills() {
  document.getElementById('home').style.display = '';
  document.getElementById('skills').style.display = 'block';
};