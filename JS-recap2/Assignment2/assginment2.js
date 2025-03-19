// luo numbers array

const numbers = [];

// käyttäjältä 5 numeroa yksi kerrallaan, numbers push

for (let i = 0; i < 5; i++) {
  let numberInput = prompt("Anna numero");
  numbers.push(numberInput);
}

// display array html:ään

document.getElementById("lista1").innerHTML = "numbers sisältö: " + numbers

// input käyttäjältä tarkistamaan onko numero arrayssa (tähän input html:ään, eikä prompt) includes
// html:ään näytä löytyikö numero vai ei

let numeroTarkistus = document.getElementById("numeroTarkistus");

let find = document.getElementById("find");

// Teen vaan yhden arrayn, niin tämä etsii uusimmasta päivitetystä arraysta eli popin jälkeisestä

numeroTarkistus.addEventListener('input', function(e) {
  if (numbers.includes(e.target.value)) {
    find.innerHTML = "Numero " + e.target.value + " löytyi";
  } else {
    find.innerHTML = "Numeroa " + e.target.value + " ei löytynyt";
  }
});

// poista viimeinen numero popilla

numbers.pop();

// näytä päivitetty numbers

document.getElementById("lista2").innerHTML = "numbers sisältö popin jälkeen: " + numbers;

// järjestä numbers sortilla kasvavalla numero järjestyksellä
// näytä järjestetyt numerot

document.getElementById("sorted").innerHTML = "Järjestetty lista: " + numbers.sort();
