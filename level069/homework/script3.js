// Exercise Set 3: Searching (indexOf, lastIndexOf, includes)
// Find Index: Create an array with repeated values. Use indexOf() to find the first occurrence of an element.
let myArray = [10, 20, 30, 10, 50, 20];//შევქმენი ლისტი განმეორებითი ელემენტებით
let index = myArray.indexOf(20); //ეძებს ოცის პირველ შეხვედრას
// Find Last Index: Use lastIndexOf() to find the last occurrence of the same element.
let lastIndex = myArray.lastIndexOf(20);
// Check Inclusion: Use includes() to check if a specific element exists in the array.
let haveNUM = myArray.includes(4); // ნახულობს არის თუ არა ელემენტი მასივში
// Invalid Index Search: Use indexOf() to search for a non-existing element. Log the result.
let index1 = myArray.indexOf(50); //მოძებნის მითითბულ ელემენტს
// Case Sensitivity: Check if includes() is case-sensitive by searching for different cases of the same string.
let stringArray = ['car', 'Ball', 'table']; //შევქმენი ლისტი სადაც შევიტანე string ელემენტები
let haveString = myArray.includes('man'); // მოძებნის მითითებულ ელემენტს


console.log(index); //გამოვიძახეთ index
console.log(lastIndex); // გამოვიძახეთ lastIndex
console.log(haveNUM); // გამოვიძახეთ haveNUM
console.log(index1); // გამოვიძახეთ  index1
console.log(haveString); // გამოვიძახეთ haveString
