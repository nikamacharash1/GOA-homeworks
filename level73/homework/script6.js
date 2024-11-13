function changeImageSource() {
    const image = document.getElementById('myImage');
    image.src = '/level73/homework/download.jpg'; 
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeImageButton');
    button.addEventListener('click', changeImageSource); 
});
