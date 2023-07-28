
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
const totalImages = sliderImages.length; // Get the total number of images
let currentIndex = 0;
let imagesPerSlide; // Number of images to display at a time (will be calculated dynamically)
let slideWidth; // Will be calculated dynamically
let sliderInterval; // Store the interval ID

function updateSlideWidth() {
  slideWidth = sliderContainer.clientWidth / imagesPerSlide;
  sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  currentIndex += imagesPerSlide;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
    sliderTrack.style.transition = "none";
    sliderTrack.style.transform = `translateX(0)`;
  } else {
    sliderTrack.style.transition = "transform 1s ease";
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
}

function calculateImagesPerSlide() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 768) {
    // Phone view: Display 1 slider image
    imagesPerSlide = 1;
  } else if (screenWidth < 1024) {
    // Tablet view: Display 2 slider images
    imagesPerSlide = 2;
  } else {
    // Laptop view and larger: Display 3 slider images
    imagesPerSlide = 3;
  }
}

function startSlider() {
  // Set the custom property "--total-images" to the total number of images
  sliderTrack.style.setProperty('--total-images', totalImages);

  // Calculate initial images per slide and slide width
  calculateImagesPerSlide();
  updateSlideWidth();

  sliderInterval = setInterval(nextSlide, 3000);
}

function pauseSlider() {
  clearInterval(sliderInterval);
}

// Recalculate images per slide and slide width on window resize
window.addEventListener("resize", () => {
  calculateImagesPerSlide();
  updateSlideWidth();
});


// Start the slider when the page loads
startSlider();

// Pause the slider when the cursor is over the current image
sliderTrack.addEventListener("mouseenter", pauseSlider);

// Resume the slider when the cursor leaves the current image
sliderTrack.addEventListener("mouseleave", startSlider);




