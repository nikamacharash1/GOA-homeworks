// >ID ის ელემენტისთვის გაწერით, ღილაკზე დაკლიკვისას გაქრეთ ეს ელემენტი ეკრანიდან (გამოიყენეთ სტილი display: none
function hideElement() { 
    const colorBlock = document.getElementById('colorBlock');
    colorBlock.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', hideElement); // ელემენტის გაქრობა ღილაკზე დაჭერისას
});
