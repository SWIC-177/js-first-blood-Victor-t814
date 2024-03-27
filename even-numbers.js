const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i += 1) {
  if (
    numbers[i] === 2 ||
    numbers[i] === 4 ||
    numbers[i] === 6 ||
    numbers[i] === 8 ||
    numbers[i] === 10
  ) {
    console.log(numbers[i]);
  }
}
