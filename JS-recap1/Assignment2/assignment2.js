// input käyttäjältä 2 koodinaattia (x,y) 2 kertaa. x,y + x,y
// 4 promptia huono, yksi prompt josta splitataan arvot

let inputs = prompt("Syötä x1, y1, x2 ja y2. Yksi välilyönti arvojen välissä");

let arvot = inputs.split(" ");

let x1 = arvot[0];

let y1 = arvot[1];

let x2 = arvot[2];

let y2 = arvot[3];

// laske kahden pisteen välinen matka 2D (Distance = √((x2 - x1)^2 + (y2 - y1)^2))

let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

// Näytä tulos html

document.getElementById("x1").innerHTML = "x1 = " + x1;
document.getElementById("y1").innerHTML = "y1 = " + y1;
document.getElementById("x2").innerHTML = "x2 = " + x2;
document.getElementById("y2").innerHTML = "y2 = " + y2;
document.getElementById("distance").innerHTML = "distance = " + distance;


