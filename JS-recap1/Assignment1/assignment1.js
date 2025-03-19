// inputti käyttäjältä celsius

let celsius = prompt("Syötä lämpötila celsiuksena");
document.getElementById("celsius").innerHTML = "celsius = " + celsius;

// muunna celsiuksesta fahreneheit

let fahreneheit = (celsius * 9/5) + 32;
document.getElementById("fahrenheit").innerHTML = "fahrenheit = " + fahreneheit;

// muunna celsiuksesta kelvin

// celsius antaa string, kun laitto plus 273.15, ei laskenut yhteen vaan lisäsi vaan merkit siihen stringinä
// Joten Number(celsius), jotta toimii halutusti

let kelvin = 273.15 + Number(celsius);
document.getElementById("kelvin").innerHTML = "kelvin = " + kelvin;
