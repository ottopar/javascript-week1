// Käyttäjältä input kokonaisluku, tämäkin kaatuu, jos laittaa liian ison luvun

const luku = prompt("Syötä positiivinen luku, johon asti tehdään kertomistaulukko");

const lukuInt = Number(luku);

// Luo kertomistaulukko lukuun asti for loopilla.

// Tähän suoraan muuttujaksi toi taulu id

const taulu = document.getElementById("taulu");

// Eka for loop luo rivin, seuraava luo tiedot, sen jälkeen lopettaa rivin ja lisätään html:ään rivi

for (let i = 1; i <= luku; i++) {
  let rivi = "<tr>";
  for(let j = 1; j <= luku; j++) {
    rivi += `<td>${i*j}</td>`;
  }
  rivi += "</tr>";
  taulu.innerHTML += rivi;
}

//
