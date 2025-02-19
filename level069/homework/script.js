// Here are five sets of exercises, each related to the array methods and properties you provided. The last set combines multiple methods for more advanced tasks.

// ---

// Exercise Set 1: Basics (Array Length, toString, at, join, pop, push)
// Get Length: Create an array with 5 items. Log the length of the array.
let myArray = [8, 9, 13, 15, 32];// შექმენით მასივი 5 ელემენტით
// Convert to String: Convert the same array to a string using toString() and log the result.
let arrayAsString = myArray.toString();//გადმოგვცემს მასივს სტრინგად
// Access Element: Use the at() method to access the second element and log it.
let secondElement = myArray.at(1);// at() მეთოდით secondElement ში შევინახეთ ლისტში მეორე რიცხვი
// Join Elements: Use join() to combine the array elements with - between them.
let joinedString = myArray.join('-'); // ვაკავშირებთ ელემენტებს ნიშნით -
// Push & Pop: Add two new elements to the array using push(), then remove the last element using pop().
myArray.push(41); // დავამატე 41
myArray.push(2); // დავამატე 2
let removedElement = myArray.pop(); // წავშალე ბოლო ელემენტი

console.log(myArray.length); // გამოვიძახეთ myArray
console.log(arrayAsString); // გამოვიძახეთ arrayAsString
console.log(secondElement); // გამოვიძახეთ secondElement
console.log(removedElement); // გამოვიძახეთ removedElement
console.log(joinedString); // გამოვიძახე joinedString
// ---

