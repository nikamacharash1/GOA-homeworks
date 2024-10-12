
// 1. **Create an object**: Make an object called `car` with properties like `brand`, `model`, and `year`.
const car = {
    brand: "BMW",
    model: "M5",
    year: 2015,
    startEngine: function() {
        console.log("Engine started")
    }
  };
const owner = {
    name: "nika",
    age: 15
}
// 2. **Access object properties**: Using the `car` object, access the `brand` and `year` properties and print them.
console.log("brand" ,brand);
console.log("year" ,year);
// 3. **Add a new property**: Add a new property `color` to the `car` object.
car.color = "red";
// 4. **Change a property value**: Update the `year` property of the `car` object to a new value.
car.year = 2014;
// 5. **Delete a property**: Remove the `model` property from the `car` object.
delete car.model;
// 6. **Create a method**: Add a method `startEngine` to the `car` object that prints "Engine started".
// its on the 7 and 8 line
// 7. **Object inside an object**: Create a new object `owner` inside the `car` object with properties like `name` and `age`.
// its on 11 line