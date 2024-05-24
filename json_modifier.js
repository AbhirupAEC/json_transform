function transformKeys(jsonArray, keyMap) {
    return jsonArray.map(obj => {
        let newObj = {};
        for (let oldKey in obj) {
            let newKey = keyMap[oldKey] || oldKey;
            newObj[newKey] = obj[oldKey];
        }
        return newObj;
    });
}

const source1 = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" }
];

const source2 = [
    { name: "ana", age: 15, city: "Asd" },
    { name: "helly", age: 35, city: "gg" },
    { name: "billy", age: 32, city: "kk" }
];

const keyMap = {
    name: "fullName",
    age: "years",
    city: "location"
};

let transformedArray = transformKeys(source1, keyMap);

/**appending source2 */
transformedArray = transformedArray.concat(transformKeys(source2, keyMap));


console.log(transformedArray);