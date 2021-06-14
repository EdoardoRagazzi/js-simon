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
/*
var array = generaArray(5)
alert(array);

// PARTE UN TIMER DI 30 SECONDI 
var timeleft = 5;
// Variabile che richiama la function Setinterval
var downloadTimer = setInterval(countDown, 1000);
console.log(downloadTimer);


if (downloadTimer == 0) {
    var numero = parseInt(prompt('INSERISCI I NUMERI'));

};


function countDown() {
    while (timeleft <= 0) {
        clearInterval(downloadTimer);
        var numero = parseInt(prompt('INSERISCI I NUMERI'));
        if (numero = array[i]) {
            document.getElementById("countdown").innerHTML = numero;
        } else if {
            document.getElementById("countdown").innerHTML = 'inseriscine un altro';
        }
        
    } if
    document.getElementById("countdown").innerHTML = timeleft + " Secondi Rimasti";

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

*/


//-----------ESERCIZIO CORRETTO-----------//
var randomNumbers = [];
var numeri = 5;


while (randomNumbers.length < numeri) {
    var numeroRandom = numeriRandom(1, 7);
    console.log(numeroRandom);
    if (!randomNumbers.includes(numeroRandom)) {
        randomNumbers.push(numeroRandom);
    }

};

alert(randomNumbers);


//--------FUNCTIONS--------//
setTimeout(function () {
    var users = [];
    for (var i = 0; i < numeri; i++) {
        var numeroUtente = parseInt(prompt('Inserisci un Numero'));
        if (randomNumbers.includes(numeroUtente) && !users.includes(numeroUtente)) {
            users.push(numeroUtente);
        }
        console.log(users);
    }


    if (users.length == 0) {
        console.log('non hai indovinato nessun numero');
    } else {
        console.log('hai indovinato' + users.length + 'numeri');
    }
}, 30000);

function numeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
