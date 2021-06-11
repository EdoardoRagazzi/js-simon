// nome repo: js-simon
// Descrizione:
// Un alert() espone 5 numeri generati casualmente.

// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// Pensate prima in italiano.
// Dividete in piccoli problemi la consegna.
// // Individuate gli elementi di cui avete bisogno per realizzare il programma.

//----------JS SIMON----------//
// ALERT CHE ESPONE 5 NUMERI CASUALI
var array = generaArray(5)
alert(array);
// PARTE UN TIMER DI 30 SECONDI 
var timeleft = 5;
// Variabile che richiama la function Setinterval
var downloadTimer = setInterval(countDown, 1000);


if (downloadTimer === 0) {
    var numero = parseInt(prompt('INSERISCI I NUMERI'));
    alert('numero indoivinato');
};


function countDown() {
    if (timeleft <= 0) {
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = 0;
    }
    else {
        document.getElementById("countdown").innerHTML = timeleft + " Secondi Rimasti";
    }
    timeleft--;
};

//--------FUNCTIONS------//
// FUNCTION ARRAY CON 5 ELEMENTI
function generaArray(longArray) {
    var array = [];
    while (array.length < longArray) {
        var numeroRandom = Math.floor(Math.random() * 10);
        array.push(numeroRandom);
    }
    return array;
};