function students(lst){
    const map = new Map();
    for(let i of lst){
        map.set(i.split(": ")[0], i.split(": ")[1]);
    };
    return map;
}
console.log(students(["davit: 99", "mari: 98", "shen: 97"]));


function noDuplicates(lst){
    const set = new Set(lst);
    const newLst = [];
    for(let i of set){
        newLst.push(i);
    };
    return newLst;
};
console.log(noDuplicates(["davit", "davit", "somone"]));

function students(map){
    for (let [key, value] of map){
        map.set(key, value + 5);
    };
    return map;
};
console.log(students(new Map([["me", 99], ["daviti", 97]])));