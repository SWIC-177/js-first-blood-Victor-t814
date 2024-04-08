const add = (a, b) => a + b;

//--------------------------------

function item(name) {
  return `This is a ${name}`;
}
function fruit(name, answer) {
  return answer(name);
}
console.log(fruit("apple", item));

//--------------------------------

function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
