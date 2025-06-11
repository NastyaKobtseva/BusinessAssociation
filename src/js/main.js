// burger menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenu.classList.add("opacity-0", "max-h-0", "overflow-hidden");
mobileMenu.style.transition = "opacity 0.3s ease-out, max-height 0.3s ease-out";


burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");

    if (mobileMenu.classList.contains("is-open")) {
        mobileMenu.classList.remove("opacity-0", "max-h-0");
        mobileMenu.classList.add("opacity-100", "max-h-screen");
    } else {
        mobileMenu.classList.remove("opacity-100", "max-h-screen");
        mobileMenu.classList.add("opacity-0", "max-h-0");
    }
});

mobileMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("is-open", "opacity-100", "max-h-screen");
        mobileMenu.classList.add("opacity-0", "max-h-0");
    });
});

// show more
document.addEventListener("DOMContentLoaded", function () {
  const toggleCardsBtn = document.getElementById("toggle-cards-btn");
  const cardsContainer = document.getElementById("cards-container");
  const allCards = cardsContainer.querySelectorAll(".person-card");

  const initiallyVisibleCount = 3;
  let isExpanded = false;

  function setInitialVisibility() {
    allCards.forEach((card, index) => {
      if (index >= initiallyVisibleCount) {
        card.classList.add("hidden-initially");
      } else {
        card.classList.remove("hidden-initially");
      }
    });
    toggleCardsBtn.textContent = "Показати всіх";
    isExpanded = false;
  }

  setInitialVisibility();

  toggleCardsBtn.addEventListener("click", function () {
    if (!isExpanded) {
      allCards.forEach((card) => {
        card.classList.remove("hidden-initially");
      });
      toggleCardsBtn.textContent = "Згорнути";
      isExpanded = true;
    } else {
      setInitialVisibility();
    }
  });
});

// faq
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });
      item.classList.toggle("active");
    });
  });
});
