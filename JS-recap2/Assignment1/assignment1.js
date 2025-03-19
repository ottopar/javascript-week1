// Luo array fruits, jossa "apple", "banana", "orange", "grape" ja "kiwi"

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Consoleen arrayn sisältö

// Joko suoraan näin

console.log("Fruits: " + fruits);

// Tai for loopilla

for (let fruit of fruits) {
  console.log(`Fruit: ${fruit}`);
}

// Laske ja näytä arrayn length consoleen

console.log("Fruits pituus: " + fruits.length);

// index 2 elementti arraysta consoleen

console.log("Index 2 elementti: " + fruits[2]);

// viimeinen elementti length propertylla consoleen

console.log("Viimeinen elementti: " + fruits[fruits.length-1]);

// tyhjä array vegetables

const vegetables = [];

// input käyttäjältä syöttämään 3 kasvista yksi kerrallaan, lisää kasvis arrayihin pushilla

for (let i = 0; i < 3; i++) {
  let vegetableInput = prompt("Syötä yksi vihannes");
  vegetables.push(vegetableInput);
}

// näytä vegetables sisältö consoleen

console.log("Vegetables sisältö: " + vegetables);

// laske ja näytä arrayn length consoleen

console.log("Vegetables pituus: " + vegetables.length);
