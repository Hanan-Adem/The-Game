const searchInput = document.querySelector(".search-box input");

if (searchInput) {
  const cards = document.querySelectorAll(
    ".game-card, .news-item, .review-card"
  );

  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "" : "none";
    });
  });
}



// لما الصفحة تكتمل تحميلها
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});




// ================== Page Load Animations ==================
window.addEventListener("load", () => {
  // كل العناصر اللي راح تتحرك عند التحميل
  const elements = document.querySelectorAll(
    ".animate-on-load, .news-item, .review-card, .game-card, .hero, .navbar"
  );

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show"); // يضيف كلاس يظهر العنصر
    }, index * 150); // كل عنصر يظهر بعد العنصر السابق بفاصل 150ms
  });
});
