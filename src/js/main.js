// burger menu 
const burger = document.getElementById('burger');
const menu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// show more
document.addEventListener('DOMContentLoaded', function() {
    const toggleCardsBtn = document.getElementById('toggle-cards-btn');
    const cardsContainer = document.getElementById('cards-container'); // Get the container
    const allCards = cardsContainer.querySelectorAll('.person-card'); // Get all cards

    // Assuming you always want to show the first 3 initially
    const initiallyVisibleCount = 3;
    let isExpanded = false; // Initial state: collapsed

    // Function to set initial visibility (only first 3 visible)
    function setInitialVisibility() {
        allCards.forEach((card, index) => {
            if (index >= initiallyVisibleCount) {
                card.classList.add('hidden-initially');
            } else {
                card.classList.remove('hidden-initially'); // Ensure first 3 are visible
            }
        });
        toggleCardsBtn.textContent = 'Показати всіх';
        isExpanded = false;
    }

    // Call this function once on load to ensure initial state
    setInitialVisibility();

    toggleCardsBtn.addEventListener('click', function() {
        if (!isExpanded) {
            // If currently collapsed, show all
            allCards.forEach(card => {
                card.classList.remove('hidden-initially');
            });
            toggleCardsBtn.textContent = 'Згорнути'; // Change button text
            isExpanded = true;
        } else {
            // If currently expanded, hide extra cards
            setInitialVisibility(); // Re-apply initial visibility
        }
    });
});