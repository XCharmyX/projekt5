const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);

const nextButton = document.querySelector(".carousel-button.carousel--right");
const prevButton = document.querySelector(".carousel-button.carousel--left");

const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Placer slides ved siden af hinanden
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
}

// Når jeg trykker på venstre pil, ryk da en slide til venstre
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevtSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, prevtSlide);
  updateDots(currentDot, prevDot);
})

// Når jeg trykker på højre pil, ryk da en slide til højre
nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;


  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
})

// Når jeg trykker på en indicator, ryk da til den valgte slide
dotsNav.addEventListener("click", e => {
   // Hvilken indicator blev der klikket på?
   const targetDot = e.target.closest("button");

   if (!targetDot) return;

   const currentSlide = track.querySelector(".current-slide");
   const currentDot = dotsNav.querySelector(".current-slide");
   const targetIndex = dots.findIndex(dot => dot === targetDot);
   const targetSlide = slides[targetIndex];

   moveToSlide(track, currentSlide, targetSlide);
   updateDots(currentDot, targetDot);
})

function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Skriv venligst lidt omkring dine idéer og tanker i forhold til din app");
    return false;
  }
  else {
    alert(" Tak! Din besked er modtaget!");
    return false;
  }
}

let liEls = document.querySelectorAll('ul li');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), liEls.length-1);
  liEls[index].scrollIntoView({behavior: 'smooth'});
}


// js til multiplechoice formular

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("myUL");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.inputpick');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Venligst skriv noget");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
//top button
var mybutton = document.getElementById("scrollbtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}