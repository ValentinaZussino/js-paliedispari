// ES PALIDROMA
// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


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
    parolaInput.value = '';
}
// on click
btnVerifica.addEventListener('click', verifica);



// ES GIOCO PARI E DISPARI
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// creo valori obbligatori
const pari = 'pari';
const dispari = 'dispari';
//prendo input di scelta utente
const sceltaUtInput = document.getElementById('scelta-utente');
//prendo input di numero utente
const numeroUtInput = document.getElementById('numero-utente');
// prendo btn gioca
const btnGioca = document.getElementById('btn-gioca');
// on click
btnGioca.addEventListener('click', function(){
    // inizio a impedire di mettere parole diverse e numeri > di 5 e < 1
    let sceltaUtValue = sceltaUtInput.value;
    sceltaUtInput.value = '';
    if(sceltaUtValue != pari && sceltaUtValue != dispari){
        alert('puoi scrivere solo o pari o dispari');   
        return;
    }
    let numeroUtValue = parseInt(numeroUtInput.value);
    numeroUtInput.value = '';
    if((numeroUtValue < 1 || numeroUtValue > 5)){
        alert('metti un numero da 1 a 5');
        return;
    }
    // genero num random del pc
    let numPc = randomNumber(1, 5);
    console.log(numPc);
    // somma num ut + num pc
    let somma = numPc + numeroUtValue;
    console.log(somma);
    // verifica se pari o disp con iseven e confronto con valore inserito
    if(isEven(somma) && sceltaUtValue == pari){
        console.log('ha vinto l\'utente');
    } else if(!isEven(somma) && sceltaUtValue == dispari){
        console.log('ha vinto l\'utente');
    } else {
        console.log('ha vinto il pc');
    }
    sceltaUtInput.value = '';
    numeroUtInput.value = '';
}) 