/**
 * Transforms the keys of a JSON array.
 * @param {Array} jsonArray - The original array of JSON objects.
 * @param {Object} keyMap - An object that maps old keys to new keys.
 * @returns {Array} - A new array of JSON objects with transformed keys.
 */
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

/**
 * Appends multiple transformed arrays into a single array.
 * @param {Array} arraysWithKeyMaps - An array of objects, each containing a jsonArray and a keyMap.
 * @returns {Array} - A single array with all transformed objects.
 */
function appendTransformedArrays(arraysWithKeyMaps) {
    let resultArray = [];
    arraysWithKeyMaps.forEach(item => {
        const transformedArray = transformKeys(item.jsonArray, item.keyMap);
        resultArray = resultArray.concat(transformedArray);
    });
    return resultArray;

}


const array1 = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "Los Angeles" }
];

const array2 = [
    { name: "Charlie", age: 35, city: "Chicago" },
    { name: "David", age: 40, city: "Houston" }
];

const keyMap1 = {
    name: "fullName",
    age: "years",
    city: "location"
};

const keyMap2 = {
    name: "fullName",
    age: "years",
    city: "place"
};

const arraysWithKeyMaps = [
    { jsonArray: array1, keyMap: keyMap1 },
    { jsonArray: array2, keyMap: keyMap2 }
];

const combinedArray = appendTransformedArrays(arraysWithKeyMaps);

console.log(combinedArray);
