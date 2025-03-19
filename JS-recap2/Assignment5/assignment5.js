// Päivitä ottamaan order string, joka määrittää järjestyksen
// asc = nouseva, desc = laskeva
//

const numbers = [7, 4, 12, 32, 1, 15];

console.log("Alkuperäinen: " + numbers);

function sortArray(array, order) {
  const sortedNumbers = [];

  for (number of array) {
    sortedNumbers.push(number);
  }

  if (order == "asc") {
  return sortedNumbers.sort((a, b) => a - b);
  } else if (order == "desc") {
    return sortedNumbers.sort((a, b) => b - a);
  }
}

console.log("Sortattu (nouseva): " + sortArray(numbers, "asc"));
console.log("Sortattu (laskeva): " + sortArray(numbers, "desc"));

