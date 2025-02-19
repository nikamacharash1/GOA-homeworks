document.getElementById('fullName').addEventListener('keyup', function () {
    const fullName = this.value;
    const fullNameError = document.getElementById('fullNameError');
    const regex = /^[a-zA-Z]+(\s[a-zA-Z]+)*$/;
    
    if (!regex.test(fullName) || fullName.length < 3) {
        this.classList.add('error');
        this.classList.remove('success');
        fullNameError.textContent = 'give me 3  or more simbols for name.';
    } else {
        this.classList.add('success');
        this.classList.remove('error');
        fullNameError.textContent = '';
    }
});

document.getElementById('email').addEventListener('keyup', function () {
    const email = this.value;
    const emailError = document.getElementById('emailError');
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
    
    if (!regex.test(email)) {
        this.classList.add('error');
        this.classList.remove('success');
        emailError.textContent = 'Email must be valid';
    } else {
        this.classList.add('success');
        this.classList.remove('error');
        emailError.textContent = '';
    }
});

document.getElementById('password').addEventListener('keyup', function () {
    const password = this.value;
    const passwordError = document.getElementById('passwordError');
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!regex.test(password)) {
        this.classList.add('error');
        this.classList.remove('success');
        passwordError.textContent = 'password need 8 simbols:1 number and 1 special simbol!!.';
    } else {
        this.classList.add('success');
        this.classList.remove('error');
        passwordError.textContent = '';
    }
});

document.getElementById('confirmPassword').addEventListener('keyup', function () {
    const confirmPassword = this.value;
    const password = document.getElementById('password').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    
    if (confirmPassword !== password) {
        this.classList.add('error');
        this.classList.remove('success');
        confirmPasswordError.textContent = 'incorrect password.';
    } else {
        this.classList.add('success');
        this.classList.remove('error');
        confirmPasswordError.textContent = '';
    }
});

document.getElementById('age').addEventListener('keyup', function () {
    const age = this.value;
    const ageError = document.getElementById('ageError');
    
    if (age < 18) {
        this.classList.add('error');
        this.classList.remove('success');
        ageError.textContent = 'you are not 18+.';
    } else {
        this.classList.add('success');
        this.classList.remove('error');
        ageError.textContent = '';
    }
});
