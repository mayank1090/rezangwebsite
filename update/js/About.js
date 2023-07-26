
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".scroll a");
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href").substring(1);
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const targetId = entry.target.getAttribute("id");
      const targetLink = document.querySelector(`a[href="#${targetId}"]`);

      if (entry.isIntersecting) {
        // Add "active" class to the corresponding navigation link's parent <li> element
        if (targetLink) {
          targetLink.parentElement.classList.add("active");
        }
      } else {
        // Remove "active" class from the corresponding navigation link's parent <li> element
        if (targetLink) {
          targetLink.parentElement.classList.remove("active");
        }
      }
    });
  };

  const observer = new IntersectionObserver(
    observerCallback,
    observerOptions
  );
  const scrollSections = document.querySelectorAll(".scroll-section");
  scrollSections.forEach((section) => {
    observer.observe(section);
  });

  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggle.addEventListener("click", function () {
    navbarCollapse.classList.toggle("collapse");
  });

  var count = document.querySelectorAll(".count");
  var arr = Array.from(count);

  count.innerHTML = "";
  var zero = 0;

  arr.map((item) => {
    var val = item.innerHTML;

    function counter() {
      item.innerHTML = zero++;
      if (zero > val) {
        clearInterval(fun);
      }
    }

    let fun = setInterval(() => {
      counter();
    }, item.dataset.time / val);
  });

  new WOW().init();
});