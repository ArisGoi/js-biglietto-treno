// 0) attivo la funzione al click del bottone
document.getElementById("calculate").addEventListener("click", calcoloPrezzo);

function calcoloPrezzo() {

    // 1) Ottengo i dati dall'utente
    var distanceKm = parseInt(document.getElementById('input_Km').value);
    var userEta = parseInt(document.getElementById('input_eta').value);

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
    
    // output = Prezzo finale del biglietto
    alert('Il prezzo del biglietto è: ' + finalPrice.toFixed(2) + ' €');
}