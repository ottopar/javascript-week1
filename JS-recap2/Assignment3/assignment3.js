// tyhjä array numbers

const numbers = [];

// while loop syöttämään numeroita kunnes käyttäjä päättää lopettaa

while (true) {
  let numberInput = prompt("Syötä numeroita tai kirjoita 'done' lopettaaksesi")
  if (numberInput == "done") {
    break;
  } else {
    numbers.push(numberInput);
  }
}

// for of loop hakemaan kaikki numerot arraysta
// katso onko tasaluku modelolla
// jos on, näytä html, jos ei, none

const tasaluku = document.getElementById("tasaluku");

const tasaluvut = [];

for (let number of numbers) {
  if (number % 2 == 0) {
    tasaluvut.push(number);
  }
}

if (tasaluvut.length >= 1) {
tasaluku.innerHTML = "Tasaluvut: " + tasaluvut;
} else {
  tasaluku.innerHTML = "Tasaluvut: None"
}

// kun loop valmis, ilmoita

window.alert("Ohjelma valmis");
