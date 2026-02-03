/* SEARCH FILTER (NEWS and REVIEWS) */
const searchInput = document.querySelector(".search-box input");
const newsItems = document.querySelectorAll(".news-item");
const reviewCards = document.querySelectorAll(".review-card");

if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    newsItems.forEach((item) => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(value) ? "flex" : "none";
    });

    reviewCards.forEach((card) => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "block" : "none";
    });
  });
}

/* MOBILE HAMBURGER MENU */
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  });
}

/* NAVBAR SCROLL EFFECT*/
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

/* SCROLL-IN ANIMATIONS (NEWS + REVIEWS) */
const animatedElements = document.querySelectorAll(".news-item, .review-card");

if (animatedElements.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => observer.observe(el));
}
