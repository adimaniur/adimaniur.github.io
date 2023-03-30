
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

// var activePage = 'home';
// var homePage = document.getElementById(activePage);

// homePage.style.display = 'block';

// function showSkills() {
//   document.getElementById('home').style.display = '';
//   document.getElementById('skills').style.display = 'block';
// };

var activePage = document.getElementById('skills');
activePage.style.display = 'block';

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    var newPageID = navLink.getAttribute('data-page');
    showPage(newPageID);
  });
});

function showPage(newPageID) {
  activePage.style.display = '';
  var newPage = document.getElementById(newPageID);
  newPage.style.display = 'block';
  activePage = newPage;
}

function slideToNav() {
  var nav = document.querySelector("nav");
  if (nav) {
    var navRect = nav.getBoundingClientRect();
    var navTop = navRect.top + window.pageYOffset;
    window.scrollTo({
      top: navTop,
      behavior: 'smooth'
    });
  }
}