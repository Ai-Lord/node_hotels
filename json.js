const objextToConvert = {
    name: "Alice",
    age: 25
};
const json = JSON.stringify(objextToConvert);
// JSON module and stringfy function to change into json
console.log(json);

console.log(typeof json);

// JSON.parse to convert json to object