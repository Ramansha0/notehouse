let btn = document.getElementById('c-btn');
let page = document.getElementById('contact-page');

btn.addEventListener('click',function(){
    page.scrollIntoView();
});
let btn1 = document.querySelector('.about1');
let page1 = document.querySelector('.about');

btn1.addEventListener('click',function(){
    page1.scrollIntoView();
});
let button = document.getElementById("bt0");
let containerp = document.getElementById("container-page");

bt0.addEventListener('click', () => {
    containerp.scrollIntoView();
})

const scrollUpBtn = document.getElementById("scrollUpBtn");


window.onscroll = () => {
  if (window.scrollY > 200) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};


scrollUpBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

let personal1 = document.getElementById("personal1");
let personal2 = document.getElementById("button");

personal1.addEventListener("click", () => {
  load.style.display = "block";
    setTimeout(() => {
        window.location.href = "https://ramansha0.github.io/Portfolio/";
}, 1000);
   
})
personal2.addEventListener("click", () => {
  load.style.display = "block";
    setTimeout(() => {
        window.location.href = "https://ramansha0.github.io/Portfolio/";
}, 1000);
   
})
//Redirecting the page//
var redict = document.getElementById("redict")
var load =   document.getElementById("loader10")
redict.addEventListener("click",function(){
    load.style.display = "block";
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/index1.html";

  }, 2000);
})

//light and the dark//
var bull = document.getElementById("puja");
var box10 = document.getElementById("dinchak"); // select the element first
var  ram=1;
bull.addEventListener("click", function() {
 
if(ram==1){
  box10.style.display = "block";
ram=2;
}
else{
  box10.style.display = "none";
  ram=1;
}


});
 const paragraph = document.querySelector('.par');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          paragraph.classList.add('visible');
        } else {
          paragraph.classList.remove('visible'); // remove when out of view
        }
      });
    }, {
      threshold: 0.2 // visible at 20%
    });

    observer.observe(paragraph);

//for the search items//
const questions = [
  "chemistry notes",
  "physics formulas",
  "biology diagram",
  "class 11 math notes",
  "nepali summary",
  "english grammar rules",
  "important long questions",
  "short questions answers",
  "science project ideas",
  "computer assignment pdf",
  "math model questions",
  "chapterwise notes",
  "class 12 solutions",
  // Science Faculty
  "chemical reactions notes",
  "thermodynamics formulas",
  "organic chemistry basics",
  "electric circuits formulas",
  "optics physics notes",
  "animal kingdom classification",
  "chemical bonding types",
];

const searchbox = document.querySelector(".search");
const show = document.querySelector(".anything");

searchbox.onkeyup = function() {
  let result = [];
  let search = searchbox.value;

  if (search.length > 0) {
    result = questions.filter(function(item) {
      return item.toLowerCase().includes(search.toLowerCase());
    });
   
  }
  display(result);

}
document.addEventListener("click", function(event) {
  // If the click is NOT inside the search box or suggestion box
  if (!searchbox.contains(event.target) && !show.contains(event.target)) {
    show.style.display = "none";
  }
});

function display(result) {
  if (result.length === 0) {
    show.style.display = "none";
    show.innerHTML = "<p class='not-found'>No results found</p>";
  } else {
    show.style.display = "block";
    show.innerHTML = result.map(function(item) {
      return `<ul>${item}</ul>`;
    }).join("");
  }
}
