function isSubset(set1, set2) {
    for (let elem of set1) {
        if (!set2.has(elem)) {
            return false;
        }
    }
    return true;
}

console.log(isSubset(new Set([1, 2]), new Set([1, 2, 3])));


function invertMap(originalMap) {
    const invertedMap = new Map();
    for (let [key, value] of originalMap) {
        invertedMap.set(value, key);
    }
    return invertedMap;
}

console.log(invertMap(new Map([['a', 1], ['b', 2], ['c', 1]])));


function findMaxKeys(map) {
    let maxVal = -Infinity;
    let keys = [];
    for (let [key, value] of map) {
        if (value > maxVal) {
            maxVal = value;
            keys = [key];
        } else if (value === maxVal) {
            keys.push(key);
        }
    }
    return keys;
}

console.log(findMaxKeys(new Map([['a', 5], ['b', 3], ['c', 5]])));