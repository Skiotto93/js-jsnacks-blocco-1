
let somma = 0;

for (i= 0; i < 10; i++) {
    //Chiedo all'utente di inserire 10 numeri
    const number = Number(prompt("inserisci un numero"));
    //il software esegue la somma dei numeri inseriti
    somma += number;
}
console.log(somma)