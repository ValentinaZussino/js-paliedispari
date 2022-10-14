// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// ES PALIDROMA
// dichiaro variabili per input e btn
const parolaInput = document.getElementById('parola');
const btnVerifica = document.getElementById('btn-verifica');
// preparo funzione per btn
const verifica = function() {
    // prendo il value in input
    let parolaValue = parolaInput.value;
    // applico controllo palindromo
    if(palindrome(parolaValue)){
    document.querySelector('p').innerHTML = 'la tua parola &egrave; palindroma';
    } else {
    document.querySelector('p').innerHTML = 'la tua parola NON &egrave; palindroma';
    }
}
// on click
btnVerifica.addEventListener('click', verifica);

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// ES GIOCO PARI E DISPARI