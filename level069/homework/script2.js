// Exercise Set 2: Modify Array (shift, unshift, delete, concat)
// Shift Element: Create an array and remove the first element using shift().
let myArray = [100, 200, 77, 89]; //შევქმენი მასივი
let removedElement = myArray.shift(); // ამოვიღე პირველი ელემენტი
// Unshift Element: Add a new element at the beginning using unshift().
myArray.unshift(68); //დავამატე 10
// Delete Element: Use the delete operator to remove the second element. Log the array and observe the result.
delete myArray[1]; //წავშალე მეორე ელემენტი
// Concatenate Arrays: Create two arrays and use concat() to merge them.
let myArray2 = [3, 99, 25];//შევქმენი მეორე ლისტი
let contactArray = myArray.concat(myArray2);//დავაკავშირე პირველი და მეორე ლისტი
// Explore Unshift & Length: After using unshift(), log the new length of the array.
myArray.unshift(98);

console.log(removedElement); //გამოვიძახე removedElement
console.log(contactArray); // გამოვიძახე contactArray
console.log(myArray.length)
console.log(myArray) // გამოვიძახე myArray
// ---

