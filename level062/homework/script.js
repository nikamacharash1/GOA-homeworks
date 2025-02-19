//  statement - განცხადება, კოდის ხაზი ერთი დავალება კომპიუტერისთვის
// custom - კონრეტულად ჩვენთან მორგეული
// კოდის ბლოკი - რაც უნდა შესრულდეს კონკრეტულ განხადებაში 





//  2) შეასრულეთ დავალებები დღეს ნასწავლი სტანდარტებისა და საუკეთესო პრაქტიკების გამოყენებით: კომენტარები, ინდენტაცია, ცვლადების შესაბამისი სახელები, camelCase method და external javascript: 

//  1.Multiply Two Numbers 
//  Write a function multiply() that prompts the user to input two numbers and returns their product. 
// ვქმნით ფუნქციას სახელად multiply
function multiply() {
    // მომხმარებელს ვთხოვთ შემოიტანოს პირველი რიცხვი
    const num1 = prompt("please enter first number:");
    // მომხმარებელს ვთხოვთ შემოიტანოს მეორე რიცხვი
    const num2 = prompt("please enter second number:");
    // ვქმნით ახალ ცვლადს სადაც ვინახავთ ნამრავლს
    const product = Number(num1) * Number(num2);
    // ვაბრუნებთ პროდუქტს
    return product;
}
// აქ ვიძახებთ ფუნქციას 
const result = multiply();
// შედეგს ვაჩენთ კონსოლში
console.log("num result:", result);

//  2.Subtract Two Numbers 
//  Write a function subtract() that prompts the user for two numbers and returns the difference. 
function subtract() { 
    // მომხმარებელს ვატანინებთ პირველ რიცხვს
    const num1 = prompt("Enter the first number:"); 
    // მომხმარებელს ვატანინებთ პირველ რიცხვს
    const num2 = prompt("Enter the second number:"); 
    // აქ ვინახავთ რიცხვების სხვაობას
    const difference = Number(num1) - Number(num2); 
    // ვაბრუნებთ სხვაობას
    return difference; 
}
// ვიძახებთ  ფუნქციას და ვინახავთ შედეგს
const result1 = subtract(); 
// შედეგი გამოგვყავს კონსოლში
console.log("num result:", result);

//  3.Divide Two Numbers 
//  Write a function divide() that prompts the user for two numbers and returns their quotient. 
function divide() {
    const num1 = prompt("Enter the first number:");
    const num2 = prompt("Enter the second number:");
    // ვყოფთ რიცხვებს ერთმანეთზე
    const quotient = Number(num1) / Number(num2);
    // ვაბრუნებთ განაყოფს
    return quotient;
}
const result2 = divide();
console.log("num result:", result);

//  4.Return a Full Name 
//  Write a function fullName() that prompts the user to input their first name and last name, and returns the full name as a single string. 
function fullName() {
    // მომხმარებელს ვთხოვთ, შემოიტანოს სახელი
    const firstName = prompt("Enter your first name:");
    // მომხმარებელს ვთხოვთ, შემოიტანოს გვარი
    const lastName = prompt("Enter your last name:");
    // ვაერთებთ სახელს და გვარს
    const fullName = firstName + " " + lastName;
    // ვაბრუნებთ სრულ სახელს და გვარს
    return fullName;
}
const name = fullName();
console.log("full name:", name);
//  5.Convert Minutes to Seconds 
//  Write a function minutesToSeconds() that prompts the user for a number of minutes and returns the equivalent in seconds. 
function minutesToSeconds() {
    // ვატანინებთ წუთებს
    const minutes = prompt("Enter the minutes:");
    // წუთებს ვამრავლებთ 60 
    const seconds = Number(minutes) * 60;
    // აბრუნებს წამებს
    return seconds;
}
const result3 = minutesToSeconds();
console.log("equivalent seconds:", result);
//  6.Calculate the Area of a Rectangle 
//  Write a function rectangleArea() that prompts the user to input the length and width of a rectangle and returns the area. 
// I CAN'T UNDERSTAND THIS

//  7.Concatenate Two Strings 
//  Write a function concatenateStrings() that prompts the user for two strings and returns them concatenated together. 
function concatenateStrings() {
    // ვატანინებთ სტრინგს
    const firstString = prompt("Enter the first string:");
    const secondString = prompt("Enter the second string:");
    // ვაერთიანებთ სტრინგებს
    const concatenatedResult = firstString + secondString;
    // ვაბრუნებთ მნიშვნელობას
    return concatenatedResult;
}
const result4 = concatenateStrings();
console.log("concatenated string:", result);
//  8.Exponentiation 
//  Write a function power() that prompts the user for a base number and an exponent, and returns the result of raising the base to the power of the exponent. 
// I CAN'T UNDERSTAND THIS

//  9.Calculate Circle Circumference 
//  Write a function circumference() that prompts the user to input a circle's radius and returns the circumference. 
// IT'S TO HARD

//  10.Return the Next Number 
//  Write a function nextNumber() that prompts the user for a number and returns the next number (the input number plus one). 
function nextNumber() {
    const number = prompt("Enter a number:");
    // შემოტანილ რიცხვს ვუმატებთ ერთს
    const nextNum = Number(number) + 1;
    return nextNum;
}
const result5 = nextNumber();
console.log("The next number is:", result); 
