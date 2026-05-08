// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//TIP:
//per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:

//100km, 10 anni => prezzo corretto:  €16.80
//100km, 70 anni => prezzo corretto: €12.60

// prompt per chiedere i km e l'età
const km = prompt("Quanti chilometri vuoi percorrere?");
const età = prompt("Quanti anni hai?");

// variabili con i prezzi e gli sconti
const prezzokm = 0.21;
let prezzotot = km * prezzokm;

const scontoMinorenni = 0.20;
const scontoOver65 = 0.40;

console.log(prezzotot);

// programma per calcolare il prezzo totale per minori e over 65
if (età < 18) {
    prezzotot = prezzotot - (prezzotot * scontoMinorenni);
    console.log(prezzotot);
}
else if (età > 65) {
    prezzotot = prezzotot - (prezzotot * scontoOver65);
    console.log(prezzotot);
}