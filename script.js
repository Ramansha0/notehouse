const contactBtns = document.querySelectorAll('.c-btn');
const contactSection = document.getElementById('contact-page');

if (contactBtns.length > 0 && contactSection) {
  contactBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}


// Smooth scroll to about section
const aboutBtns = document.querySelectorAll('.about1');
const aboutSection = document.getElementById('about-section');

if (aboutBtns.length > 0 && aboutSection) {
  aboutBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
}


// Smooth scroll to container section
const containerBtn = document.getElementById('bt0');
const containerPage = document.getElementById('container-page');
if (containerBtn && containerPage) {
  containerBtn.addEventListener('click', () => {
    containerPage.scrollIntoView({ behavior: 'smooth' });
  });
}

// Show scroll-up button on scroll
const scrollUpBtn = document.getElementById("scrollUpBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
});

// Scroll to top when scroll-up button clicked
if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

const personalLinks = document.querySelectorAll(".perso");
const loader = document.getElementById("loader10");
const redict = document.getElementById("redict");

const redirectWithLoader = (url, delay = 1000) => {
  if (loader) loader.style.display = "block";
  setTimeout(() => {
    window.location.href = url;
  }, delay);
};

// ✅ Add event listener to each ".perso" element
personalLinks.forEach(link => {
  link.addEventListener("click", () => {
    redirectWithLoader("https://ramansha0.github.io/Portfolio/");
  });
});

// ✅ redict button works as expected
if (redict) {
  redict.addEventListener("click", () => {
    redirectWithLoader("http://127.0.0.1:5500/index1.html", 2000);
  });
}



// Light/Dark toggle
const toggleBtn = document.getElementById("puja");
const toggleBox = document.getElementById("dinchak");
let toggleState = 1;

if (toggleBtn && toggleBox) {
  toggleBtn.addEventListener("click", () => {
    toggleBox.style.display = (toggleState === 1) ? "block" : "none";
    toggleState = (toggleState === 1) ? 2 : 1;
  });
}

// Paragraph intersection observer
const paragraph = document.querySelector('.par');
if (paragraph) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      paragraph.classList.toggle('visible', entry.isIntersecting);
    });
  }, { threshold: 0.2 });

  observer.observe(paragraph);
}

// Search bar filter
const searchbox = document.querySelector(".search");
const show = document.querySelector(".anything");

const questions = [
  "chemistry notes", "physics formulas", "biology diagram", "class 11 math notes",
  "nepali summary", "english grammar rules", "important long questions",
  "short questions answers", "science project ideas", "computer assignment pdf",
  "math model questions", "chapterwise notes", "class 12 solutions",
  "chemical reactions notes", "thermodynamics formulas", "organic chemistry basics",
  "electric circuits formulas", "optics physics notes", "animal kingdom classification",
  "chemical bonding types"
];

function displayResults(results) {
  if (show) {
    if (results.length === 0) {
      show.innerHTML = "<p class='not-found'>No results found</p>";
      show.style.display = "block";
    } else {
      show.innerHTML = results.map(item => `<ul>${item}</ul>`).join("");
      show.style.display = "block";
    }
  }
}

if (searchbox && show) {
  searchbox.addEventListener("keyup", () => {
    const value = searchbox.value.toLowerCase();
    const filtered = questions.filter(q => q.toLowerCase().includes(value));
    displayResults(value.length > 0 ? filtered : []);
  });

  document.addEventListener("click", e => {
    if (!searchbox.contains(e.target) && !show.contains(e.target)) {
      show.style.display = "none";
    }
  });
}
