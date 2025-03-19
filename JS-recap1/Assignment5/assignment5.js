// input käyttäjältä positiivinen kokonaisluku

// Tähän jos laittaa jonkun luvun joka on yli joku miljardin nii homma kaatuu, ehkä joku rajoitus tähän

const luku = prompt("Anna positiivinen kokonaisluku (Max 8 Merkkiä pitkä)");

// laske lukujen summa käyttäjän lukuun asti (jos esim luku 3 niin 1 + 2 + 3 = 6)

let sum = 0;

// rajoitus että enintään 8 merkkiä pitkä luku

console.log(luku.length);
if (luku.length <= 8) {
  for (i = 0; i <= luku; i++) {
    sum += i;
  }
  document.getElementById("sum").innerHTML = "Summa on: " + sum;
} else {
  document.getElementById("sum").innerHTML = "Annappa vähän pienempi luku (Max 8 Merkkiä pitkä)";
}

