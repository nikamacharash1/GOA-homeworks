// >შექმენით div ბლოკი და ჩაწერეთ შიგნით ტექსტი, შემდეგ js ის ფაილის გამოყენებით შეაბრუნეთ მათი ფერები, ანუ div ბლოკის ფერი მიანიჭეთ ტექსტს და ტექსტის ფერი დივ ბლოკს
function changeColor() { 
    const colorBlock = document.getElementById('colorBlock');

    // ვცვლით ფონის და ტექსტის ფერებს
    colorBlock.style.color = 'blue'; 
    colorBlock.style.backgroundColor = 'black'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorButton');
    button.addEventListener('click', changeColor);
});
