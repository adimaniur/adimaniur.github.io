
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
var activePage = document.getElementById('skills');
activePage.style.display = 'block';

function showPage(newPageID) {
  activePage.style.display = '';
  var newPage = document.getElementById(newPageID);
  newPage.style.display = 'block';
  activePage = newPage;
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    var newPageID = navLink.getAttribute('data-page');
    showPage(newPageID);
  });
});

// active page/button
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// slide nav to top
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

function slideToFooter() {
  const scrollHeight = document.body.scrollHeight;
  const scrollOptions = {
    top: scrollHeight,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
}



