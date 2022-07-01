let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function (key) {
  console.log(key);
}); // only logs myObj own properties

for (let key in myObj) {
  console.log(key);
}

// The code above iterates over all of the object's keys, including inherited keys. For only its own properties, use the code below:

// for (let key in myObj) {
//   if (myObj.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
