let cookies = 0;
let gold = 0;
let biggerFingerLevel = 0;
let betterMinesLevel = 0;
let doubleCookiesLevel = 0;

const cookieElement = document.getElementById('cookie');
const cookiesElement = document.getElementById('cookies');
const goldElement = document.getElementById('gold');
const upgradeBiggerFinger = document.getElementById('upgradeBiggerFinger');
const upgradeBetterMines = document.getElementById('upgradeBetterMines');
const upgradeDoubleCookies = document.getElementById('upgradeDoubleCookies');

cookieElement.addEventListener('click', () => {
    let clickValue = 1 + biggerFingerLevel;  
    cookies += clickValue;
    gold += 1 + betterMinesLevel;  
    updateUI();
});

function updateUI() {
    cookiesElement.innerText = cookies;
    goldElement.innerText = gold;

    upgradeBiggerFinger.classList.toggle('disabled', gold < Math.pow(2, biggerFingerLevel) * 50);
    upgradeBetterMines.classList.toggle('disabled', cookies < Math.pow(2, betterMinesLevel) * 100);
    upgradeDoubleCookies.classList.toggle('disabled', gold < Math.pow(2, doubleCookiesLevel) * 200);
}

upgradeBiggerFinger.addEventListener('click', () => {
    const cost = Math.pow(2, biggerFingerLevel) * 50;
    if (gold >= cost) {
        gold -= cost;
        biggerFingerLevel++;
        updateUI();
    }
});

upgradeBetterMines.addEventListener('click', () => {
    const cost = Math.pow(2, betterMinesLevel) * 100;
    if (cookies >= cost) {
        cookies -= cost;
        betterMinesLevel++;
        updateUI();
    }
});

upgradeDoubleCookies.addEventListener('click', () => {
    const cost = Math.pow(2, doubleCookiesLevel) * 200;
    if (gold >= cost) {
        gold -= cost;
        doubleCookiesLevel++;
        updateUI();
    }
});

updateUI(); 
