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

let personal = document.getElementById("personal1");
let loader = document.getElementById("loader");

personal.addEventListener("click", () => {
    loader.style.display = "block"
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/index.html";
}, 3000);
   
})

