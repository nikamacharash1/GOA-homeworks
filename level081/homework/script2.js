const slideButton = document.getElementById('slideButton');
const slideBlock = document.getElementById('slideBlock');

slideButton.addEventListener('click', () => {
  if (slideBlock.style.left === '0px') {
    slideBlock.style.left = '-350px'; 
  } else {
    slideBlock.style.left = '0px'; 
  }
});
