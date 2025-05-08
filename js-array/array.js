let initialValues = [
  1,
  5,
  "arr",
  true,
  undefined,
  null,
  0,
  7,
  "Anna",
  [7, 20, 50],
];
console.log(initialValues);

//declarati si initializati un alt array denumit otherValues

let otherValues = [
  "Wantsome",
  100,
  200,
  300,
  400,
  "students",
  undefined,
  null,
  true,
  false,
  0,
  7,
  8,
  9,
  10,
  "JS",
];
console.log(otherValues);

// push la otherValues array in initialValues array;
initialValues.push(otherValues);
console.log("nestedArray:", initialValues);

//Folositi valorile de tip numeric din initialValues pentru a calcula cateva operatii aritmetice

initialValues[0] = 1 + 7;
initialValues[1] = 5 + 10;
initialValues[6] = 0 + 30;
initialValues[7] = 7 - 5;
initialValues[9][0] = 7 * 3;
initialValues[9][1] = 20 / 2;
initialValues[9][2] = 50 - 2;
console.log("addValues:", initialValues);

//Dupa ce a-ti facut operatiile, modificati valorile din initialValues array cu noile valori obtinute pe baza operatiilor. Valorile sa fie puse pe pozitiile corespunzatoare, sa nu fie adaugate ca valori noi in array.

initialValues = [1, 5, "arr", true, undefined, null, 0, 7, "Anna", [7, 20, 50]];
console.log("initialValues:", initialValues);

let newValues = JSON.parse(JSON.stringify(initialValues));

for (let i = 0; i < newValues.length; i++) {
  if (typeof newValues[i] === "number") {
    newValues[i] = newValues[i] + 2;
  }
}

console.log("newValues:", newValues);

// Concatenati toate valorile de tip string din initialValues array cu string-ul ”happy codding”;
initialValues = [1, 5, "arr", true, undefined, null, 0, 7, "Anna", [7, 20, 50]];

newValues = JSON.parse(JSON.stringify(initialValues));

for (let i = 0; i < newValues.length; i++) {
  if (typeof newValues[i] === "string") {
    newValues[i] = newValues[i] + " happy codding";
  }
}

console.log("originalArray:", initialValues);
console.log("concatArray:", newValues);

// Folosing operatorul “!” inversati toate valorile boolene din initialValues array;

initialValues = [1, 5, "arr", true, undefined, null, 0, 7, "Anna", [7, 20, 50]];

newValues = JSON.parse(JSON.stringify(initialValues));

for (let i = 0; i < newValues.length; i++) {
  if (typeof newValues[i] === "boolean") {
    newValues[i] = !newValues[i];
  }
}

console.log("originalArray:", initialValues);
console.log("modifiedArray:", newValues);
