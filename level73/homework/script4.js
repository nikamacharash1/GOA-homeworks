function changeBackgroundColor() {
    const elements = document.querySelectorAll('.color-block'); 
    elements.forEach(element => {
        element.style.backgroundColor = 'green'; 
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', changeBackgroundColor); // ფონდის ფერის შეცვლა ღილაკზე დაჭერისას
});
