// Protein Products Filter 
(function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const sections = Array.from(document.querySelectorAll(".section-title"))
    .map((h3) => ({
      title: h3,
      grid: h3.nextElementSibling?.classList.contains("card-grid")
        ? h3.nextElementSibling
        : null,
    }))
    .filter((x) => x.grid);

  const allCards = document.querySelectorAll(".card");

  function applyFilter(tag) {
    // Show/hide individual cards
    allCards.forEach((card) => {
      const tags = (card.getAttribute("data-tags") || "")
        .toLowerCase()
        .split(",")
        .map((s) => s.trim());
      const show = tag === "all" || tags.includes(tag);
      card.classList.toggle("is-hidden", !show);
    });

    // Collapse any empty sections (no visible cards)
    sections.forEach(({ title, grid }) => {
      const hasVisible = grid.querySelector(".card:not(.is-hidden)") !== null;
      title.classList.toggle("is-hidden-block", !hasVisible);
      grid.classList.toggle("is-hidden-block", !hasVisible);
    });
  }

  // Wire buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      applyFilter(btn.dataset.filter);
    });
  });

  // Default state (activate "All" filter)
  (document.querySelector(".filter-btn.is-active") || buttons[0])?.click();
})();

// Footer - Year display
document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Form Notif
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("orderForm");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); //does not actually submit form
      alert("Thank you! This is a test form for class purposes. No actual order is submitted. Please go to the website link to place an order");
      form.reset();
    });
  }
});