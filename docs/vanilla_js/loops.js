const animals = ["dog", "cat", "bird", "fish", "lizard"];

// Normal
for (let i = 2; i < animals.length; i++) {
  console.log(`${animals[i]}`);
}

// for iterable
for (let animal of animals) {
  console.log(`${animal}`);
}

const animals_obj = [
  //   animal,
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

for (let animal of animals_obj) {
  console.log(`${animal["name"]}, ${animal["species"]}`);
  console.log();
}

// for (variable of iterable) {
//     // code block to be executed
//   }
const cars = ["BMW", "Volvo", "Mini"];
for (let car of cars) {
  console.log(`${car}`);
  //cars[0];
}
//car;
cars.forEach((car) => {
  console.log(`${car}`);
});

// forEach
const array1 = ["a", "b", "c"];

array1.forEach((element, i) => console.log(element));

// Arrow Function
let arrowFunction = (element, index) => {
  console.log(`${element}, index ${index}`);
};
array1.forEach(arrowFunction);

// Normal Function
function normalFunction(element) {
  console.log(element);
}
array1.forEach(normalFunction);
