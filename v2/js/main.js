
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

// fetch data from skills.json
function loadSkills() {
  fetch("./skills.json")
  .then(function (r) {
    return r.json();
  })
  .then(function (skills) {
    showSkills(skills);
  });
}

// load skills into html
function showSkills(skills) {
  skills.sort(function (a, b) {
    return a.endorcements - b.endorcements;
  });
  // skills.sort(function (a, b) {
  //   return a.name.localeCompare(b.name);
  // });
  var html = skills.map(function (skill) {
    var cls = skill.endorcements > 4 ? "important" : "";
    return `
        <li class="${cls}">
          ${skill.name} 
          ${skill.endorcements < 2 ? "" : `<span class="endorcements">${skill.endorcements}</span>`} 
        </li>`
  });
  
  var container = document.querySelector('#skills ul');
  container.innerHTML = html.join("");
}



loadSkills();
