// 1) შექმენით ფუნქცია, რომელიც გამოიტანს მესიჯს სამი წამის შემდეგ
function showMessage() {
    setTimeout(() => {
        console.log("show message");
    }, 3000);
}




// 2) შექმენით პროგრამა, რომელიც ყოველ წამს გამოიტანს ამჟამინდელ დროს "საათი:წუთი:წამი"
function displayTime() {
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}


// 3) შექმენით პროგრამა, რომელიც ყოველ 3 წამში შეცვლის საიტის background ფონის ფერს.(ფერის მნიშვნელობა შეინახეთ მასივში)
const colors = ['#black', '#red', '#blue', '#green', '#yellow', '#white'];

function changeBackgroundColor() {
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // მორიგდება მასივის ზომით
    }, 3000);
}










