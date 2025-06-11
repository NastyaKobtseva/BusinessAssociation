// burger menu
const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");
const menuLinks = document.querySelectorAll("#mobile-menu a"); 

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
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
