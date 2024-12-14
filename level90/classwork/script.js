
const cardsData = [
    { title: "Card 1", number: 25, rating: 3, image: "GOA Best" },
    { title: "Card 2", number: 40, rating: 5, image: "GOA Best" },
    { title: "Card 3", number: 60, rating: 4, image: "GOA Best" },
    { title: "Card 4", number: 20, rating: 2, image: "GOA Best" },
    { title: "Card 5", number: 55, rating: 1, image: "GOA Best" },
    { title: "Card 6", number: 35, rating: 4, image: "GOA Best" },
    { title: "Card 7", number: 50, rating: 3, image: "GOA Best" },
    { title: "Card 8", number: 80, rating: 5, image: "GOA Best" },
    { title: "Card 9", number: 90, rating: 2, image: "GOA Best" },
    { title: "Card 10", number: 70, rating: 4, image: "GOA Best" },
];

function displayCards(filteredCards) {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; 

    filteredCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card'); 

        cardElement.innerHTML = `
            <div class="card-image">${card.image}</div> <!-- Card image (GOA Best) -->
            <h3>${card.title}</h3> <!-- Card title -->
            <div class="number">${card.number}</div> <!-- Card number -->
            <div class="rating">Rating: ${card.rating}</div> <!-- Card rating -->
        `;
        container.appendChild(cardElement); 
    });
}

function sortRatingAscending() {
    const sortedCards = [...cardsData].sort((a, b) => a.rating - b.rating); 
    displayCards(sortedCards); 
}
function sortRatingDescending() {
    const sortedCards = [...cardsData].sort((a, b) => b.rating - a.rating); 
    displayCards(sortedCards); 
}
displayCards(cardsData); 
