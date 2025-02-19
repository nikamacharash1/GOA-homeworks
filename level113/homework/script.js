//  // task 1 and task 3

//  class Person {
//      constructor(firstName, lastName, age) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.age = age;
//      }
  
//      get initials() {
//          if(this.firstName.length !== 0 && this.lastName.length !== 0){
//              return this.firstName[0] + this.lastName[0];
//          }
//          return "you need a name"
//      }
//      get isRetired(){
//          if(this.age >= 60){
//              return true
//          }
//          else{
//              return false        
//          }
//      }
//    }
  
//  const person = new Person('', '', 11);
//  console.log(person.initials);
//  console.log(person.isRetired);


//   2
//  class Person {
//      constructor(name, age) {
//          this.name = name;
//          this.age = age;
//      }

//      get ageInMonths() {
//          return this.age * 12;
//      }
//  }

//  const person = new Person("John", 25);
//  console.log(`${person.name}'s age in months: ${person.ageInMonths}`);


//  // task 4 ans task 5

//  class Product{
//      constructor(price, discount){
//          this.price = price;
//          this.discount = discount;
//      }
//      get formatedPrice(){
//          return "$" + this.price;
//      }
//      get discountPrice(){
//          return this.price - this.discount;
//      }
//  }
//  const product = new Product(100, 50);
//  console.log(product.formatedPrice);
//  console.log(product.discountPrice);