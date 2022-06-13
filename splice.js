let array = [1, 4, 3, 10, "a", null, "xyz", 42, "abc"];

console.log(array.splice(3, 3));

array.forEach(function (num) {
  console.log(num);
});
