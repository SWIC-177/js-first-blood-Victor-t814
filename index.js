const dog = "scooter";
let newDog = dog;

console.log(`my first dog was ${dog}`);
console.log(` my new dog is ${newDog}`);

newDog = "chuck";

console.log(`my first dog was ${dog}`);
console.log(` my new dog is ${newDog}`);

newDog = "max";

console.log(`my first dog was ${dog}`);
console.log(` my new dog is ${newDog}`);
//--------------------------------------------
const value = 42;
let newValue = value;

function changeValue(add) {
  return add + 8;
}
newValue = changeValue(newValue);

console.log(`the original value was ${value}`);
console.log(`the new value is ${newValue}`);
//--------------------------------------------
