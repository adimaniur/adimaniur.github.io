
// contact form labels
const inputs = document.querySelectorAll('.form-field');

inputs.forEach(input => {
  const label = document.querySelector(`label[for="${input.id}"]`);

  input.addEventListener('focus', () => {
    label.classList.add('active');
  });

  input.addEventListener('input', () => {
    if (input.value !== '') {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });

  input.addEventListener('blur', () => {
    if (input.value === '') {
      label.classList.remove('active');
    }
  });
});

// content tabs
var activePage = 'home';
var homePage = document.getElementById(activePage);

homePage.style.display = 'block';

function showSkills() {
  document.getElementById('home').style.display = '';
  document.getElementById('skills').style.display = 'block';
};