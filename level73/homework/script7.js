function displayInputText() {
    const input = document.getElementById('myInput');
    const paragraph = document.getElementById('displayParagraph');
    paragraph.textContent = input.value; // ტექსტის გამოჩენა პარაგრაფში
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('displayTextButton');
    button.addEventListener('click', displayInputText); // ტექსტის გამოჩენა ღილაკზე დაჭერისას
});
