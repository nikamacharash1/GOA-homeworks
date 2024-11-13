// 1) შექმენით ფუქცია რომელიც გამოიტანს ("გამარჯობა")-ს (ვოიდ ფუნქცია)
function greet() {
    console.log("hello");
}
greet()


// 2) შექმენით ფუნქცია რომელსაც გადაეცემა სახელის არგუმენტი და გამოიტანს ამ სახელის მისალმებას (მაგ: "გამარჯობა, ლაშა")
// (ვოიდ ფუნქცია)
function greetName(name) {
    console.log(`hello, ${name}`);
}
greetName("nika");  
greetName("gio"); 


// 3) შექმენით ფუნქცია რომელიც აბრუნებს გადაცემულ რიცხვზე ერთით მეტს (მაგ: 55->56)  (ჩვეულებრივი ფუნქცია)
function addOne(number) {
    return number + 1;
}
console.log(addOne(67));  
console.log(addOne(90));  
console.log(addOne(43));  

// 4) შექმენით ფუნქცია რომელიც აბრუნებს არა-ნეგატიური რიცხვის ნეგატიურ ვერსიას და შემდეგ გამოიყენეთ ეს ფუნქცია
//  რომ გამოიტანოთ დაბრუნებულზე ერთით მეტი რიცხვი (მაგ: თუ ფუნქციას გადავეცით 44 საბოლლოდ უნდა გამოვიტანოთ (კონსოლში) -43 ) (ჩვეულებრივი ფუნქცია)
function negate(number) {
    return -Math.abs(number);  
}

function addOneToNegated(number) {
    const negNumber = negate(number);  
    return negNumber - 1;  
}
console.log(addOneToNegated(44));  

