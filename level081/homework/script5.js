const rotatingElement = document.getElementById('rotatingElement');
const rotateButton = document.getElementById('rotateButton');

rotateButton.addEventListener('click', function() {
    rotatingElement.style.transform = "rotate(360deg)";

    setTimeout(function() {
        rotatingElement.style.transform = "rotate(0deg)";
    }, 2000);
});
