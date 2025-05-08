// Creati un algoritm care sa calculeze impozitul auto pentru capacitatea cilindrica introdusa prin prompt de utilizator.
//Calcularea impozitului pentru alte tipuri de vehicule. Tipul vehiculului se va introduce printr-un alt prompt (auto, motocicleta, camion, etc)

let taxe = {
  auto: [
    { capacitate: 1600, taxa: 0.08 },
    { capacitate: 2000, taxa: 0.18 },
    { capacitate: 2600, taxa: 0.072 },
    { capacitate: 3000, taxa: 0.144 },
    { capacitate: 3001, taxa: 0.29 },
  ],
  motocicleta: [
    { capacitate: 125, taxa: 0.04 },
    { capacitate: 500, taxa: 0.08 },
    { capacitate: 800, taxa: 0.14 },
    { capacitate: 1200, taxa: 0.24 },
    { capacitate: 1201, taxa: 0.32 },
  ],
  camion: [
    { capacitate: 3200, taxa: 0.32 },
    { capacitate: 5000, taxa: 0.56 },
    { capacitate: 8000, taxa: 1.2 },
    { capacitate: 12000, taxa: 2.0 },
    { capacitate: 12001, taxa: 2.5 },
  ],
};

let capacitateCilindrica = parseInt(
  prompt("Introduceti intai capacitatea cilindrica (in cm³):")
);

if (isNaN(capacitateCilindrica) || capacitateCilindrica <= 0) {
  alert("Capacitatea cilindrica trebuie sa fie un numar mai mare decat 0!");
  throw new Error();
}

let tipVehicul = prompt(
  "Introduceti tipul vehiculului (auto, motocicleta, camion):"
);

if (
  tipVehicul !== "auto" &&
  tipVehicul !== "motocicleta" &&
  tipVehicul !== "camion"
) {
  alert("Tipul vehiculului nu este valid!");
  throw new Error();
}

let vehiculTaxa = taxe[tipVehicul];
let taxa = capacitateCilindrica * vehiculTaxa[vehiculTaxa.length - 1].taxa;

for (let i = 0; i < vehiculTaxa.length; i++) {
  if (capacitateCilindrica <= vehiculTaxa[i].capacitate) {
    taxa = capacitateCilindrica * vehiculTaxa[i].taxa;
    break;
  }
}

taxa = Math.floor(taxa);

console.log(
  `Impozitul pentru capacitatea cilindrica de ${capacitateCilindrica} cm³ este: ${taxa} lei.`
);
alert(
  `Impozitul pentru capacitatea cilindrica de ${capacitateCilindrica} cm³ este: ${taxa} lei.`
);
