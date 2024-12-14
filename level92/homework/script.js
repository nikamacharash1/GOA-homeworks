function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthText = document.getElementById('strengthText');
    const submitButton = document.querySelector('input[type="submit"]');
    
    let strength = '';
    let color = '';
    
    const weakPattern = /.{6,}/; 
    const mediumPattern = /^(?=.*[A-Z])|(?=.*\d).{8,}$/; 
    const strongPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/; 
    
    if (strongPattern.test(password)) {
        strength = 'strong';
        color = 'strong';
        submitButton.disabled = false;
    } else if (mediumPattern.test(password)) {
        strength = 'medium';
        color = 'medium';
        submitButton.disabled = false;
    } else if (weakPattern.test(password)) {
        strength = 'weak';
        color = 'weak';
        submitButton.disabled = false;
    } else {
        strength = '';
        color = '';
        submitButton.disabled = true; 
    }

    strengthText.textContent = strength;
    strengthText.className = `strength-text ${color}`;
    
    const passwordField = document.getElementById('password');
    passwordField.style.backgroundColor = color === 'strong' ? '#d4edda' : color === 'medium' ? '#fff3cd' : color === 'weak' ? '#f8d7da' : '';
}
