// burger menu 
const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// show more
document.addEventListener('DOMContentLoaded', function() {
    const toggleCardsBtn = document.getElementById('toggle-cards-btn');
    const cardsContainer = document.getElementById('cards-container');
    const allCards = cardsContainer.querySelectorAll('.person-card'); 

    const initiallyVisibleCount = 3;
    let isExpanded = false;

    function setInitialVisibility() {
        allCards.forEach((card, index) => {
            if (index >= initiallyVisibleCount) {
                card.classList.add('hidden-initially');
            } else {
                card.classList.remove('hidden-initially');
            }
        });
        toggleCardsBtn.textContent = 'Показати всіх';
        isExpanded = false;
    }

    setInitialVisibility();

    toggleCardsBtn.addEventListener('click', function() {
        if (!isExpanded) {
            allCards.forEach(card => {
                card.classList.remove('hidden-initially');
            });
            toggleCardsBtn.textContent = 'Згорнути';
            isExpanded = true;
        } else {
            setInitialVisibility();
        }
    });
});