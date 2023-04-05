
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

// slide from nav to footer
function slideToFooter() {
  const scrollHeight = document.body.scrollHeight;
  const scrollOptions = {
    top: scrollHeight,
    behavior: 'smooth'
  };
  window.scrollTo(scrollOptions);
}

// slide from footer to nav
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

// nav functionality
var activePage = "skills";
show(activePage);

function hide(id) {
  document.getElementById(id).style.display = "";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hideAllPages() {
  var pages = document.querySelectorAll(".main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}

document.querySelector(".nav-links").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    const id = e.target.dataset.page;
    showPage(id);
  }
});

//insert skill into html
function showSkills() {
  var skills = [
    {
      name: "html",
      endorcements: 5,
    },
    {
      name: "css",
      endorcements: 15,
    },
    {
      name: "js",
      endorcements: 25,
    },
  ];
  var html = skills.map(function (skill) {
   return `<li>${skill.name} - ${skill.endorcements}</li>`
  });
  
  var container = document.querySelector('#skills ul');
  container.innerHTML = html.join("");
}

showSkills();