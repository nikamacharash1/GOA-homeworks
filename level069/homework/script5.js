// Exercise Set 5: Combined Operations
// Sort and Push: Create an array of numbers, sort it, and add a new number using push(). Log the updated array.
let myArray = [34, 12, 5, 67, 23];
myArray.sort((a, b) => a - b);
myArray.push(45);
// Concatenate and Sort: Create two arrays, merge them with concat(), and sort the result.
let myArray2 = [44, 13, 5, 66];
let contactArray = myArray.concat(myArray2);
contactArray.sort((a, b) => a - b);
// Push and Reverse: Add three new elements to an array, then reverse the entire array.
myArray.push(14);
myArray.push(15);
myArray.push(17);
myArray.reverse();
// Find and Remove Element: Use indexOf() to locate an element, then use splice() to remove it.
let index = myArray.indexOf(12);
if (index !== -1) {
    myArray.splice(index, 1);
}

console.log("Sorted array:", myArray);
console.log("Contact and Sorted array:", contactArray);
console.log("Array after adding elements:", myArray);
console.log("Reversed array:", myArray);
console.log("Index of 30:", index);
console.log("Array after removing elemnt:", myArray);




// Join and Include Check: Join the elements of an array into a string, split it back into an array, and check if a specific value is included using includes().
let stringArray = ['car', 'Ball', 'table', 'toy'];
let joinedString = stringArray.join(", ");
let splitArray = joinedString.split(", ");
let haveBall = splitArray.includes("Ball");

console.log("Joined string:", joinedString);
console.log("Split array:", splitArray);
console.log("Does the array include 'Ball'? ", haveBall)