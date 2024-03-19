const name = "Victor";
const age = 28;
function verifyAdulthood(inputName, inputAge) {
  if (inputAge >= 18) {
    return `Welcome ${inputName}!`;
  }
  return `Your are not old enough to enter, ${inputName}!`;
}
console.log(verifyAdulthood(name, age));
