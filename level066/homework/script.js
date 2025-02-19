 
// Easy
// დავალება NUM 1: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.
// function Even_Odd(number) {
//     if (number % 2 === 0) {
//         return "This number is even.";
//     } else {
//         return "This number is odd.";
//     }
// }
// დავალება NUM 2: შექმენი პირობა, რომელიც შეამოწმებს, არის თუ არა სია ცარიელი და თუ არა, იპოვოს რიცხვების ჯამი.
// function num_sum(numbers) {
//     if (numbers.length === 0) {
//         return "its empty.";
//     }
//     const sum = numbers.reduce((total, number) => total + number, 0);
//     return sum;
//  }
// დავალება NUM 3: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვების სიას, გაამრავლებს ყველა რიცხვს 3-ზე და დაიბრუნებს მხოლოდ იმ რიცხვებს, 
// რომლებიც 20-ზე მეტია.
function multiply_nums(numbers) {
    const result = numbers
    .multi(num => num * 3) 
    .filter(num => num > 20);
    return result;
}


// Medium
// დავალება NUM 4: შექმენი პირობა, რომელიც შეამოწმებს სიაში უდიდეს რიცხვს და დააბრუნებს მას.
function max_num(numbers) {
    let maxNumber = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }
    return maxNumber;
}
// დავალება NUM 5: დაწერე ფუნქცია, რომელიც მიიღებს ორ რიცხვს და პირობით შეამოწმებს, თუ მათი ნამრავლი 100-ზე მეტია.
function checkProduct(num1, num2) {
    const product = num1 * num2;
    if (product > 100) {
        return "The product is greater than 100.";
    } else {
        return "The product is not greater than 100.";
    }
}
// Chad
// დავალება NUM 6: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და შეამოწმებს, თუ ტექსტის პირველ და ბოლო ასოები ერთნაირია.
// დავალება NUM 7: შექმენი ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს თითოეული ასოს სიხშირეს, ანუ რამდენჯერ გვხვდება თითოეული ასო ტექსტში.

