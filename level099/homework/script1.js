const greet = (name = "somewone") => `hello, ${name}!`;

console.log(greet("nika"))
console.log(greet())


// 2
const sum = (a = 0, b = 5) => a + b;

console.log(sum(1, 7))
console.log(sum())

// 3
const max = (a = 10, b = 20) => (a > b ? a : b);

console.log(max(1, 7))
console.log(max())


// 4
const multiply = (a = 1, b = 2, c = 3) => a * b * c;

console.log(multiply(1, 7, 10))
console.log(multiply())


// 5
const calculatePrice = (price, tax = 0.05) => price + (price * tax);

console.log(calculatePrice(1, 7))
console.log(calculatePrice(100))

// 6
const repeatText = (text, times = 3) => text.repeat(times);

console.log(repeatText('1', 7))
console.log(repeatText('100'))


// 7

const isGreater = (a = 5, b = 10) => a > b;

console.log(isGreater(1, 7))
console.log(isGreater(100))


// 8

const introduce = ({ name = "nika", age = 16, city = "kaxeti" } = {}) => `hello, i am ${name}, ${age} years and live in ${city}-.`;

console.log(introduce({name: "nika", age: 123456789, city: "dedopliswyaro"}))
console.log(introduce())



// 9
const numberSeries = (start = 1, end = 10, step = 1) => {
    let series = [];
    for (let i = start; i <= end; i += step) {
        series.push(i);
    }
    return series;
};

console.log(numberSeries(2, 100, 8))
console.log(numberSeries())

// 10
const mergeObjects = (...objects) => {
    let result = {};
    objects.forEach(obj => {
        for (let key in obj) {
            result[key] = obj[key];
        }
    });
    return result;
};

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

console.log(mergeObjects(obj1, obj2, obj3));