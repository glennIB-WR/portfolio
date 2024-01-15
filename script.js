// FOR TOGGLE NAVIGATION

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.sidebarMenuInner li a');

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 60;
    let height = section.offsetHeight;
    let id = section.getAttribute('id');

    // Check if the current scroll position is within the bounds of the section
   if (top >= offset && top < offset + height) {
    // Do something when the scroll position is within the bounds of the section
  }
  });
};


// FOR CAROUSEL

var slideIndex = 1;

// Initialize the carousel with the first slide
showSlides(slideIndex);

// Move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Go to a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Display the slides and update the dots
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  // Handle edge cases when reaching the end or beginning of the slides
  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove 'active' class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and update the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// FOR SKILL BAR

const spans = document.querySelectorAll('.progress-bar span');

// Set the width and content of each skill bar span based on the dataset values
spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});
