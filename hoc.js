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

// Når jeg trykker på venstre pil, ryk da en slide til venstre
// Når jeg trykker på højre pil, ryk da en slide til højre
nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  console.log(currentSlide.nextElementSibling);
  const nextSlide = currentSlide.nextElementSibling;
  const amountToMove = nextSlide.style.left;


  // Flyt til næste slide
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
})
// Når jeg trykker på en indicator, ryk da til den valgte slide

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