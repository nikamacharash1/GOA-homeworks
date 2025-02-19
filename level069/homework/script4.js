// Exercise Set 4: Sorting and Reversing (sort, reverse)
// Sort Strings: Create an array of strings and sort them using sort().
let stringArray = ['car', 'Ball', 'table', 'toy']; //შევქმენი ლისტი და მივეცი string მნიშვნელობის ელემენტები
stringArray.sort(); // დააწყობს ლისტს სწორად ანბანის მიხედვით
// Sort Numbers: Create an array of numbers and sort them in ascending order.
let myArray = [8, 7, 5, 15, 32]; // შევქმენი მასივი
myArray.sort((a, b) => a - b)
console.log(myArray);
// Custom Sort: Use a custom comparison function to sort numbers in descending order.
myArray.sort((a, b) => b - a);
console.log(myArray);
// Reverse Array: Use reverse() on a sorted array and log the result.
//done
console.log(stringArray)// გამოვიძახე stringArray

// Mix Sort and Reverse: Sort an array, then reverse it.
let myArray1 = [45, 7, 5, 66, 55];
myArray1.sort((a, b) => a - b);
console.log("Sorted array:", myArray1);
myArray1.reverse();

console.log("Reversed array:", myArray1);