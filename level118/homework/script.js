// class Person{
//     #id
//     #facts
//     constructor(name, surname, age, id, facts){
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.id = id;
//         this.facts = facts;
//     }
//     set name(new_name){
//         if (typeof new_name == "string"){
//             this._name = new_name;
//         }
//         else{
//             return "invalid";
//         };
//     };
//     get name(){
//         return this._name;
//     };
//     set surname(new_surname){
//         if (typeof new_surname == "string"){
//             this._surname = new_surname;
//         }
//         else{
//             return "invalid";
//         };
//     };
//     get surname(){
//         return this._surname;
//     };
//     set age(new_age){
//         if (typeof new_age == "number"){
//             this._age = new_age;
//         }
//         else{
//             return "invalid";
//         };
//     };
//     get age(){
//         return this._age;
//     };
//     set facts(new_facts){
//         if (typeof new_facts == "object"){
//             this.#facts = new_facts;
//         }
//         else{
//             return "invalid";
//         };
//     }
//     set id(new_id){
//         if (typeof new_id == "number" && String(new_id).length <= 4){
//             this.#id = new_id;
//         }
//         else{
//             return "invalid"
//         };
//     };
//     get personal(){
//         const question1 = prompt("tell me a fact? ");
//         const question2 = prompt("one more fact? ");
//         if(this.#facts.includes(question1) && this.#facts.includes(question2)){
//             return [this.#facts, this.#id];
//         };
//         return "invalid";
//     };
// };

// const me = new Person("nika", "macharashvili", 13, 1234, ["eats food", "drinks water"])
// console.log(me.personal)





// class Personal{
//     #id;
//     constructor(name, id){
//         this.name = name;
//         this.#id = id;
//     };
//     get id(){
//         return this.#id;
//     };
// };
// const mea = new Personal("nika", 1234);
// console.log(me);




// class BankAccount{
//     #balance;
//     #facts;
//     constructor(balance, facts){
//         this.balance = balance;
//         this.facts = facts;
//     }
//     set balance(new_balance){
//         if(typeof new_balance == "number"){
//             this.#balance = new_balance;
//         }
//         else{
//             return "invalid";
//         };
//     };
//     get balance(){
//         const question1 = prompt("tell me a fact? ");
//         const question2 = prompt("one more fact? ");
//         if(this.#facts.includes(question1) && this.#facts.includes(question2)){
//             return this.#balance;
//         };
//         return "invalid";
//     }
//     set facts(new_facts){
//         if (typeof new_facts == "object"){
//             this.#facts = new_facts;
//         }
//         else{
//             return "invalid";
//         };
//     };
//     deposit(amount){
//         const question1 = prompt("tell me a fact? ");
//         const question2 = prompt("one more fact? ");
//         if(this.#facts.includes(question1) && this.#facts.includes(question2)){
//             this.#balance += amount;
//             return "new balance: " + this.#balance;
//         };
//         return "invalid";
//     }
// }
// const me = new BankAccount(1234, ["eats food", "drinks water"])
// console.log(me.balance)