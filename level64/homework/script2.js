const dateBase = [];

const name = document.getElementById('name').value; 
const email = document.getElementById('email').value; 
const password = document.getElementById('password').value;

if (password.length < 8) {
    alert("Password is too short"); // შეტყობინება
    return;
}

const userObject = {
    name: name,
    email: email,
    password: password,
    gender: gender
};

dateBase.push(userObject);
console.log(dateBase);
