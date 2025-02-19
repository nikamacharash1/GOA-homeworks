function changeParagraphText() {
    const paragraph = document.getElementById('myParagraph');
    paragraph.textContent = 'compiuter!'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeTextButton');
    button.addEventListener('click', changeParagraphText); // პარაგრაფის შიგთავსის შეცვლა ღილაკზე დაჭერისას
});
