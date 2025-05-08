//calculati media aritmetica a unui array de numere

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let average = sum / arr.length;
console.log("media:", average);

// avand un array cu numere, valori booleene si stringuri calculati suma tuturor numerelor. Ignorati toate valorile care nu sunt de tip numar.

let arr2 = [
  100,
  27,
  {
    school: "Wantsome",
    firstName: "Anna",
    lastName: "Zaharia",
  },
  true,
  false,
  "arr",
  8,
  10,
  7,
];

sum = 0;
for (let i = 0; i < arr2.length; i++) {
  if (typeof arr2[i] === "number") {
    sum += arr2[i];
  }
}

console.log("suma:", sum);

// creati un program care va afisa primele 20 numere Fibonacci

let fib = [0, 1];
for (let i = 2; i < 20; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("fibonacci:", fib);
