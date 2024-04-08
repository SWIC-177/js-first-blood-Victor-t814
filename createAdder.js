function createAdder(increment) {
  return function add(score) {
    return score + increment;
  };
}
const onePoint = createAdder(1);
const twoPoints = createAdder(2);
const threePoints = createAdder(3);
const sixPoints = createAdder(6);
let footballScore = 0;
footballScore = onePoint(footballScore);
console.log(`PAT made: ${footballScore}`);
footballScore = twoPoints(footballScore);
console.log(`Saftey!: ${footballScore}`);
footballScore = threePoints(footballScore);
console.log(`Field goal: ${footballScore}`);
footballScore = sixPoints(footballScore);
console.log(`Touchdown!: ${footballScore}`);
