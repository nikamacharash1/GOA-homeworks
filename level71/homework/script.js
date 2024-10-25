// Math.E
console.log(Math.E); 
console.log(Math.E * 2); 
console.log(Math.E ** 2); 
console.log(Math.E - 1); 
console.log(Math.E ** 3); 
console.log(Math.log(Math.E)); 
console.log(Math.exp(1)); 
console.log(Math.E / 2); 
console.log(Math.sqrt(Math.E)); 
console.log(Math.abs(Math.E - 3)); 

// Math.random
console.log(Math.random()); 
console.log(Math.random() * 100); 
console.log(Math.floor(Math.random() * 10)); 
console.log(Math.ceil(Math.random() * 10)); 
console.log(Math.round(Math.random() * 10)); 
console.log(Math.random() > 0.5); 
console.log(Math.random().toFixed(2)); 
console.log(Math.random() * 50 + 50); 
console.log(Math.random() * 100 - 50); 
console.log(Math.floor(Math.random() * 100) + 1); 

// Math.floor
console.log(Math.floor(4.9)); 
console.log(Math.floor(-4.1)); 
console.log(Math.floor(5.1)); 
console.log(Math.floor(0.99)); 
console.log(Math.floor(10.0)); 
console.log(Math.floor(Math.random() * 10)); 
console.log(Math.floor(-5.9)); 
console.log(Math.floor(7.5)); 
console.log(Math.floor(3.3)); 
console.log(Math.floor(1.999)); 

// Math.trunc
console.log(Math.trunc(4.9)); 
console.log(Math.trunc(-4.1)); 
console.log(Math.trunc(5.1)); 
console.log(Math.trunc(0.99)); 
console.log(Math.trunc(10.0)); 
console.log(Math.trunc(-5.9));
console.log(Math.trunc(7.5)); 
console.log(Math.trunc(3.3));
console.log(Math.trunc(1.999)); 
console.log(Math.trunc(Math.random() * 100)); 9

// Math.round
console.log(Math.round(4.5)); 
console.log(Math.round(4.4)); 
console.log(Math.round(-4.5));
console.log(Math.round(-4.6)); 
console.log(Math.round(0.49)); 
console.log(Math.round(0.50)); 
console.log(Math.round(Math.random() * 10)); 
console.log(Math.round(5.99)); 
console.log(Math.round(-5.01)); 
console.log(Math.round(Math.random() * 100)); 

// Math.Pi
console.log(Math.PI);
console.log(Math.PI * 2);  
console.log(Math.PI / 2); 
console.log(Math.PI * Math.PI); 
console.log(Math.PI * 180); 
console.log(Math.sin(Math.PI / 2)); 
console.log(Math.cos(Math.PI)); 
console.log(Math.tan(Math.PI / 4)); 
console.log(Math.PI.toFixed(3));
console.log(Math.abs(Math.PI - 3)); 

// Math.ceil
console.log(Math.ceil(4.1)); 
console.log(Math.ceil(-4.1)); 
console.log(Math.ceil(5.9)); 
console.log(Math.ceil(0.1)); 
console.log(Math.ceil(-5.9));
console.log(Math.ceil(10.0)); 
console.log(Math.ceil(Math.random() * 10)); 
console.log(Math.ceil(3.3)); 
console.log(Math.ceil(-3.3)); 
console.log(Math.ceil(1.999)); 

// Math.pow
console.log(Math.pow(2, 3)); 
console.log(Math.pow(3, 2)); 
console.log(Math.pow(4, 0.5)); 
console.log(Math.pow(10, -1)); 
console.log(Math.pow(5, 2)); 
console.log(Math.pow(2, 10)); 
console.log(Math.pow(7, 3)); 
console.log(Math.pow(8, 0)); 
console.log(Math.pow(-3, 2)); 
console.log(Math.pow(0, 5)); 

// Math.abs
console.log(Math.abs(-5)); 
console.log(Math.abs(5)); 
console.log(Math.abs(-3.14)); 
console.log(Math.abs(3.14)); 
console.log(Math.abs(-0)); 
console.log(Math.abs(Math.random() * -10)); 
console.log(Math.abs(-100)); 
console.log(Math.abs(100));
console.log(Math.abs(-Math.PI)); 
console.log(Math.abs(-Math.E)); 

// Math.sqrt
console.log(Math.sqrt(4)); 
console.log(Math.sqrt(9)); 
console.log(Math.sqrt(16)); 
console.log(Math.sqrt(25)); 
console.log(Math.sqrt(0)); 
console.log(Math.sqrt(1)); 
console.log(Math.sqrt(2)); 
console.log(Math.sqrt(10)); 
console.log(Math.sqrt(100)); 
console.log(Math.sqrt(0.25)); 



// 4) Write a function that generates a random number between 1 and 100 using Math.random(). Ensure the number is an integer.
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log(randomNumber());


// 5) Write a function that calculates the area of a circle given the radius using the formula πr², and use Math.PI for π.
function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return Math.PI * Math.pow(radius, 2);
}
const radius = 5;
const area = calculateCircleArea(radius);
console.log(`The area of a circle with radius ${radius} is ${area.toFixed(2)}`);

// ნიშანი $ ძირითადად გამოიყენება სხვადასხვა პროგრამირების ენებში და ტექნოლოგიებში, რათა მიუთითოს კონკრეტულ ფუნქციებზე, 