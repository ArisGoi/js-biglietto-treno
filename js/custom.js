// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// 1) Ottengo i dati dall'utente
var distanceKm = parseInt(prompt('Quanti Km vuoi percorrere?'));
var userEta = parseInt(prompt('Quanti anni hai?'));

// 2) Calcolo il prezzo in base ai Km
var ticketPrice = distanceKm * 0.21; //Prezzo: 0.21€ al Km

