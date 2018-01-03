'use strict';

/************* SLIDER JS ************************/
var slideIndex = 1;
showSlides(slideIndex);

var transitionSpeed = 8000;

var autoplay = setInterval(function() {plusSlides(1);}, transitionSpeed);

function userClickPlusSlides(n) {
  clearInterval(autoplay);
  plusSlides(n);
  autoplay = setInterval(function() {plusSlides(1);}, transitionSpeed);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
