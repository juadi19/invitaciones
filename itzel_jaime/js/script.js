window.picturefill();


window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// -------------- COUNTDOWN -------------- //

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdown = document.getElementById("countdown");
const year = document.getElementById("year");
const loading = document.getElementById("loading");

const currentYear = new Date().getFullYear();

const newDateTime = new Date(`May 6 2023 00:00:00`);

// Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newDateTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  // Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// Run every second
setInterval(updateCountdown, 1000);

// --------------------------------------- //

// Play and Pause music fuction

let audio = document.getElementById('audio');
let button = document.getElementById('btn');

button.addEventListener('click', (e) => {
  if (audio.paused) {
    audio.play();
    button.innerHTML = `<i class="fa-solid fa-pause fa-xl"></i>`;
  } else {
    audio.pause();
    button.innerHTML = `<i class="fa-solid fa-play fa-xl"></i>`
  }
})

// function play() {
//   var audio = document.getElementById("audio");
//   if (audio.paused) {
//     audio.play();
//     document.getElementById('float').style.backgroundImage = "url(img/volume-high-solid.svg)"

//   } else {
//     audio.pause();
//     document.getElementById('float').style.backgroundImage = "url(img/volume-xmark-solid.svg)"
//   }
// }

// Scroll Animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } //else {
    //   entry.target.classList.remove('show')
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var timeOut = 2000;
var slideIndex = 0;
var autoOn = true;





const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  slides[n].classList.add('active');
  currentSlide = n;
}

function prevSlide() {
  showSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(0);
