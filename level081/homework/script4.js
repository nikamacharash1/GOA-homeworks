const textElement = document.getElementById('text');
const button = document.getElementById('animateButton');

button.addEventListener('click', function() {
    textElement.style.fontSize = "60px";

    setTimeout(function() {
        textElement.style.fontSize = "30px";
    }, 1000); 
});
