let objA = { a: "foo" };
let objB = { b: "bar" };
let objC = Object.assign({}, objA, objB);

console.log(objC);
console.log(objA);
