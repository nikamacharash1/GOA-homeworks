// >შეცვაკლეთ ტექსტის შიგტავსი js-ის გამოყენებით და ღილაკზე დაჭერისას console.log -ში გამოიტანეთ
// ფუნქცია, რომელიც ცვლის ტექსტს და გამოსცემს console-ში
function changeText() {
    // ვპოულობთ პარაგრაფის ელემენტს მისი ID-ის საშუალებით
    const textElement = document.getElementById('text');
    
    // ვცვლით პარაგრაფში არსებული ტექსტის მნიშვნელობას
    textElement.textContent = 'GOA IS BEST 101%!';
    
    // console.log-ში ვაჩვენებთ ახალ ტექსტს
    console.log(textElement.textContent);
}

// როდესაც HTML დოკუმენტი სრულად დაიტვირთება
document.addEventListener('DOMContentLoaded', () => {
    // ვპოულობთ ღილაკის ელემენტს მისი ID-ის საშუალებით
    const button = document.getElementById('changeTextButton');
    
    // ღილაკზე დაჭერის დროს ვიყენებთ changeText ფუნქციას
    button.addEventListener('click', changeText);
});
