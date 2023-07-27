
document.addEventListener("DOMContentLoaded", function () {

  const headerPlaceholder = document.getElementById('header-placeholder');
  fetch('./Header.html')
      .then(response => response.text())
      .then(content => {
        console.log(content)
          headerPlaceholder.innerHTML = content;
          const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggle.addEventListener("click", function () {
    navbarCollapse.classList.toggle("collapse");
  });
      })
      .catch(error => console.error('Error loading header:', error));

      const footerPlaceholder = document.getElementById('footer-placeholder');
      fetch('./Footer.html')
      .then(response => response.text())
      .then(content => {
        console.log(content)
          footerPlaceholder.innerHTML = content;
         
      })
      .catch(error => console.error('Error loading header:', error));

});

const sliderContainer = document.querySelector(".slider-container");
const sliderTrack = document.querySelector(".slider-track");
const sliderImages = document.querySelectorAll(".slider-image");
let slideWidth = sliderContainer.clientWidth; // Calculate the slide width based on the container
let currentIndex = 0;
const totalImages = sliderImages.length;
let sliderInterval; // Store the interval ID

function updateSlideWidth() {
  slideWidth = sliderContainer.clientWidth;
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(0)`;
  } else {
    sliderTrack.style.transition = "transform 2s ease";
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 3000);
}

function pauseSlider() {
  clearInterval(sliderInterval);
}

// Start the slider when the page loads
startSlider();

// Pause the slider when the cursor is over the current image
sliderTrack.addEventListener("mouseenter", pauseSlider);

// Resume the slider when the cursor leaves the current image
sliderTrack.addEventListener("mouseleave", startSlider);

// Update slideWidth when the window is resized
window.addEventListener("resize", updateSlideWidth);



