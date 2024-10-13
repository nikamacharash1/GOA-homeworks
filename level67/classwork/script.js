let num = 0;
while(num < 10){
    console.log("luka");
    num++;
}

function Person(firstname, lastname, sisters, isWorking){
    this.firstname = firstname;
    this.lastname = lastname;
    this.sisters = sisters;
    this.isWorking = isWorking;
}

// new - ახალი - ეს keyword ქმნის ახალ ცარიელ ობიექტს

const person1 = new Person("Luka", "Tskhvaradze", 2, true);