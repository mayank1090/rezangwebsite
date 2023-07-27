
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