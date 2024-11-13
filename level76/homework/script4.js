
function getName(objectsArray) {
    let namesArray = [];
    for (let i = 0; i < objectsArray.length; i++) {
        namesArray.push(objectsArray[i].name);
    }
    return namesArray;
}
const people = [
    { name: 'Nika', age: 16 },
    { name: 'Aleqsandre', age: 76},
    { name: 'Gio', age: 13 }
];
const names = getName(people);
console.log(names);  



