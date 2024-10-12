function age_check() {
    const age = 15;
    if (age >= 18) {
        return "You are  adult.";
    } else {
        const yearsLeft = 18 - age;
        return `You are not  adult. You have {yearsLeft} year left.`;
    }

}