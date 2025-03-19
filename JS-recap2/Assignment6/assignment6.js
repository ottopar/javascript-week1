// Luo olioita kuvaamaan jokaista elokuvaa title, rating ominaisuuksilla

// Käyttäjältä input, kuinka monta elokuvaa haluaa arvostella

let luku = prompt("Kuinka monta elokuvaa haluat arvostella (luku)?");

// Ota ylös loopilla titteli ja arvostelu, säilytä arrayihin oliot

const elokuvat = [];

for (let i = 1; i <= luku; i++) {
  let titteli = prompt(i + ". Elokuvan titteli");
  let arvosana = prompt(i + ". Elokuvan arvosana (1-5)");
  const elokuva = {
    title: titteli,
    rating: arvosana
  }
  elokuvat.push(elokuva);

}

// Sort array korkeimmasta arvosanasta alhaisimpaan

const sortedElokuvat = elokuvat.sort((a, b) => b.rating - a.rating);

// Määritä paras elokuva ensimmäisen elementin perusteella

const paras = sortedElokuvat[0];

// Näytä sortattu array ja paras elokuva HTML dokkarissa

const elokuvalista = document.getElementById("elokuvalista");

for (leffa of sortedElokuvat) {
  elokuvalista.innerHTML += "<li> Titteli: " + leffa.title + ", Arvosana: " + leffa.rating + "</li>";
}

document.getElementById("paras").innerHTML = "Paras elokuva: " + paras.title + ", Arvosana: " + paras.rating;


