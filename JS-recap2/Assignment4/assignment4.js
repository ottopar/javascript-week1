// funktio sortArray(), joka ottaa parametrinä arrayn numeroita ja palauttaa uuden arrayn nousevassa numerojärjestyksessä

const numbers = [7, 4, 12, 32, 1, 15];

console.log("Alkuperäinen: " + numbers)

function sortArray(array) {
  const sortedNumbers = [];

  for (number of array) {
    sortedNumbers.push(number);
  }

  return sortedNumbers.sort((a, b) => a - b);
}

console.log("Sortattu: " + sortArray(numbers));
