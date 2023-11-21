// pure function

function sum(a, b) {
  return a + b;
}
sum(10, 20);

//side effect
let numbers = 100;
function changeLimit(numbers) {
  return (numbers = 500);
}
limit = changeLimit(numbers);
console.log(numbers);

// impure function
const arr = [1, 2, 3];
function add(data) {
  arr.push(data);
}

function log(msg) {
  console.log(msg); //this is an impure function because it called the system console.
}

// Logic Building
const limit = 2;
const fn = (limit) => {
  limit = 5;
  return limit;
};
const result = Math.floor(Math.random() * 50) * limit * fn();
if (result > 50) {
  console.log("Result is more then you deserve, That is the number = ", result);
} else {
  console.log("You have won the lottery man!, This is your Number = ", result);
}
