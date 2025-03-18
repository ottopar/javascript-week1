// inputti käyttäjältä celsius

let celsius = prompt("Syötä lämpötila celsiuksena");
document.getElementById("celsius").innerHTML = "celsius = " + celsius;

// muunna celsiuksesta fahreneheit

let fahreneheit = (celsius * 9/5)+ 32;
document.getElementById("fahrenheit").innerHTML = "fahrenheit = " + fahreneheit;



// muunna celsiuksesta kelvin

let kelvin = celsius + 273.15;
document.getElementById("kelvin").innerHTML = "kelvin = " + kelvin;



// display kaikki shitit



