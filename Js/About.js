/*  ABOUT PAGE */

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const searchInput = document.querySelector(".search-box input");

  /*  HAMBURGER MENU + ANIMATION */
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("active");
        menuToggle.classList.remove("open");
      }
    });
  }

  /*  STICKY NAVBAR ON SCROLL*/
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });

  /*ACTIVE LINK HIGHLIGHT*/
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".nav-links a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });

  /* SEARCH BOX LOGIC */
  if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const query = searchInput.value.trim();

        if (query !== "") {
          alert(`Searching for: "${query}"`);
          searchInput.value = "";
        }
      }
    });
  }

  /* RESET MENU ON RESIZE */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && navLinks && menuToggle) {
      navLinks.classList.remove("active");
      menuToggle.classList.remove("open");
    }
  });
});
