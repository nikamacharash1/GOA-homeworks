// 1) შექმენით ობიექტი და გამოიტანეთ მისი ინფორმაცია შემდეგი ფორმატით ( key: value )

const me = {
    name: "nika",
    surname: "macharashvil",
    age: 16,
    height: 1.60
}

for (let i in me){
    console.log(i + ": " + me[i])
}

const me2 = {
    name: "nika",
    surname: "macharashvili",
    age: 16,
    height: 1.60
}

for (let i in me){
    me[i]= me[i].toString()
    if (me[i].length <= 5){
        console.log(i + ": " + me[i])
    }
}