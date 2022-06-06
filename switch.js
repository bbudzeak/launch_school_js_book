let a = 6;

switch (a) {
  case 5:
    console.log("a is 5");
    break;
  case 6:
    console.log("a is 6");
    break;
  default:
    console.log("a is neither 5, nor 6");
    break;
}

function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log("Sorry, this is not an integer");
    return;
  }

  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}
