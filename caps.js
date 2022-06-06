function capsString(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(capsString("Hello World!"));
console.log(capsString("test"));
console.log(capsString("This should be all-caps"));
