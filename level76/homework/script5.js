// 7) შევქმნათ ობიექტი და გავუწეროთ მას 3 მეთოდი და 3 ფროფერთი 
const person = {
    name: 'nika',
    age: 16,
    class: '10',

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    },

    updateAge: function(newAge) {
        this.age = newAge;
        console.log(`My new age is ${this.age}`);
    },

    changeClass: function(newClass) {
        this.class = newClass;
        console.log(`I am now in class ${this.class}`);
    }
};

person.greet();           
person.updateAge(17);      
person.changeClass('11');
