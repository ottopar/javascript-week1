// input käyttäjältä sijoittamaan pisteet
const pisteet = prompt("Anna saadut pisteet kurssilta");

// laske arvosana pisteistä näillä arvoilla:
/*
Scores between 0 and 39 receive a grade of 0.
Scores between 40 and 51 receive a grade of 1.
Scores between 52 and 63 receive a grade of 2.
Scores between 64 and 75 receive a grade of 3.
Scores between 76 and 87 receive a grade of 4.
Scores between 88 and 100 receive a grade of 5.
*/


function grade(i) {
  document.getElementById("grade").innerHTML = "Arvosana: " + i;
}

/*

function laske() {
  if (pisteet >= 0 && pisteet <= 39) {
    grade(0);
  }

  else if (pisteet >= 40 && pisteet <= 51) {
    grade(1);
  }

  else if (pisteet >= 52 && pisteet <= 63) {
    grade(2);
  }

  else if (pisteet >= 64 && pisteet <= 75) {
    grade(3);
  }

  else if (pisteet >= 76 && pisteet <= 87) {
    grade(4);
  }

  else if (pisteet >= 88 && pisteet <= 100) {
    grade(5);
  }

  else {
    grade("Virheelliset pisteet")
  }
}

laske();

*/

// Switch case siistimpi kuin if else funktio

switch (true) {
  case pisteet >= 0 && pisteet <= 39:
    grade(0);
    break;
  case pisteet >= 40 && pisteet <= 51:
    grade(1);
    break;
  case pisteet >= 52 && pisteet <= 63:
    grade(2);
    break;
  case pisteet >= 64 && pisteet <= 75:
    grade(3);
    break;
  case pisteet >= 76 && pisteet <= 87:
    grade(4);
    break;
  case pisteet >= 88 && pisteet <= 100:
    grade(5);
    break;
  default:
    grade("Virheellinen pistemäärä");
}
