function unionOfSets(setsArray) {
    const unionSet = new Set();
    for (const set of setsArray) {
        for (const value of set) {
            unionSet.add(value);
        }
    }
    return unionSet;
}

console.log(unionOfSets([new Set([1, 2]), new Set([2, 3]), new Set([3, 4])]));


function symmetricDifference(set1, set2) {
    const difference = new Set(set1);
    for (const value of set2) {
        if (difference.has(value)) {
            difference.delete(value);
        } else {
            difference.add(value);
        }
    }
    return difference;
}

console.log(symmetricDifference(new Set([1, 2, 3]), new Set([3, 4, 5])));


function characterFrequency(str) {
    const frequencyMap = new Map();
    for (const char of str) {
        const count = frequencyMap.get(char) || 0;
        frequencyMap.set(char, count + 1);
    }
    return frequencyMap;
}

console.log(characterFrequency("hello"));