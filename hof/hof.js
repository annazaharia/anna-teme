// verificati daca toate elementele unui array sunt numere pare folosind metoda every
const array = [1, 2, 3, 40, 15, 25, 48, 17, 26, 58, 59, 37, 90, 81, 82];

function checkArray(array, transformArray) {
  console.log(transformArray(array));
}

function getEvenNumbers(arr) {
  return arr.filter((elem) => elem % 2 === 0);
}
checkArray(array, getEvenNumbers);

// folosind forEach, afisati toate elementele unui array
const names = ["Anna", "Eugen", "Simona", "Iulian", "Adina", "Razvan"];

function displayNames(names, newArray) {
  newArray(names);
}

function newDisplayNames(names) {
  names.forEach((name) => console.log(`${name}`));
}

displayNames(names, newDisplayNames);

// folosind reduce, adunati toate numerele dintr-un array
const numbers = [5, 10, 75, 95, 2, 45, 80, 65];

function sumNumbers(numbers, totalNumbers) {
  console.log(totalNumbers(numbers));
}

function newTotalNumbers(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

sumNumbers(numbers, newTotalNumbers);
