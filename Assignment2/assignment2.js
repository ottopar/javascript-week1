// input käyttäjältä 2 koodinaattia (x,y) 2 kertaa. x,y + x,y

let x1 = prompt("Syötä ensimmäisen pisteen x koordinaatti");

let y1 = prompt("Syötä ensimmäisen pisteen y koordinaatti");

let x2 = prompt("Syötä toisen pisteen x koordinaatti");

let y2 = prompt("Syötä toisen pisteen y koordinaatti");


// laske kahden pisteen välinen matka 2D (Distance = √((x2 - x1)^2 + (y2 - y1)^2))

let distance = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);


// Näytä tulos html

document.getElementById("x1").innerHTML = "x1 = " + x1;
document.getElementById("y1").innerHTML = "y1 = " + y1;
document.getElementById("x2").innerHTML = "x2 = " + x2;
document.getElementById("y2").innerHTML = "y2 = " + y2;
document.getElementById("distance").innerHTML = "distance = " + distance;


