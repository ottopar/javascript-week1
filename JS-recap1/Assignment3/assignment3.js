// input kolme kantaa kolmiosta käyttäjältä, vaikka prompt + split

let inputs = prompt("Anna kolmion kantojen pituudet (3 arvoa). Arvojen välillä välilyönti");

let arvot = inputs.split(" ");

let x1 = arvot[0];

let x2 = arvot[1];

let x3 = arvot[2];

// Määritä kolmion tyyppi kantojen pituuksien perusteella
// kaikki yhtä suuria, kaksi kantaa yhtä suuria, ei mikään kanta yhtä suuri (käytä &&, ||, !)
// print tulos html

function kolmioTyyppi() {
  if (x1 == x3 && x2 == x3) {
    document.getElementById("tulos").innerHTML = "Kaikki sivut yhtäsuuria, equilateral";
  }

  else if (x2 == x1 || x3 == x2 || x1 == x3) {
    document.getElementById("tulos").innerHTML = "2 sivua yhtäsuuria, isosceles";
  }

  else {
    document.getElementById("tulos").innerHTML = "Sivut erisuuria, scalene";
  }
}

kolmioTyyppi();
