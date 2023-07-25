
      document.addEventListener("DOMContentLoaded", function () {

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