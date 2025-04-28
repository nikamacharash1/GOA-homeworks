// # 5) გამოგეცემათ მატრიცა და შექმენით ფუნქცია toObj - რომელიც გადააქცევს ამ მატრიცას ობიექტად, ( მატრიცაში თითოეულ მასივს ექნება 2 ელემენტი [key, value] )
const matrix = [["name", "nika"], ["age", 15], ["city", "dedoplistskaro"]];
function toObj(matrix) {
    return matrix.reduce((obj, [key, value]) => {
        obj[key] = value;
        return obj;
    }, {});
}
const obj = toObj(matrix);
console.log(obj);


// 6) შექმენით ფუნცია რომელსაც გადაეცემა ობიექტების მასივი ( ობიექტებს აქვთ სახელის და ქულის პროპერთიები ), თქვენი მიზანია დააბრუნოთ მასივი დასორტირებული სახელების მხოლოს. ( სტრინგების )
const people = [
    { name: "nika", score: 35 },
    { name: "levani", score: 76 },
    { name: "tamo", score: 67 },
    { name: "nato", score: 24 }
  ];
  function sortNamesByScore(arr) {
    return arr
      .map(person => person.name)    
      .sort();                      
  }
  const sortedNames = sortNamesByScore(people);
  console.log(sortedNames);
  






