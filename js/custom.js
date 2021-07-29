// 1) Ottengo i dati dall'utente
var distanceKm = parseInt(prompt('Quanti Km vuoi percorrere?'));
var userEta = parseInt(prompt('Quanti anni hai?'));

// 2) Calcolo il prezzo in base ai Km
var ticketPrice = distanceKm * 0.21; //Prezzo: 0.21€ al Km

// 3) divido gli sconti per età e ottengo il prezzo finale
var sconto;

if (userEta < 18){
    sconto = (ticketPrice * 20 /100);
} else if (userEta >= 65){
    sconto = (ticketPrice * 40 /100);
} else {
    sconto = 0;
}

var finalPrice = ticketPrice - sconto;
finalPrice = (Math.round(finalPrice * 100) / 100).toFixed(2);

// output = Prezzo finale del biglietto
alert('Il prezzo del biglietto è: ' + finalPrice + ' €');
