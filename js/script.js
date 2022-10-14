// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let word = '2porop2';
console.log(palindrome(word));

const parolaInput = document.getElementById('parola');
const btnVerifica = document.getElementById('btn-verifica')

const verifica = function() {
    let parolaValue = parolaInput.value;
    if(palindrome(parolaValue)){
    document.querySelector('p').innerHTML = 'la tua parola &egrave; palindroma'
    } else {
    document.querySelector('p').innerHTML = 'la tua parola NON &egrave; palindroma'
    }
}

btnVerifica.addEventListener('click', verifica)
