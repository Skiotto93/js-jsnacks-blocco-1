"use strict";
//Chiedo all'utente di inserire una prima parola
const firstword = prompt("Inserisci la prima parola");
//Chiedo all'utente di inserire una seconda parola
const secondword = prompt("Inserisci la seconda parola");
//Il software stampa prima la parola più lunga e poi quella corta
if (firstword.length > secondword.length) {
    console.log(firstword)
} else if (secondword.length > firstword.length) {
    console.log(secondword)
} else if (firstword.length = secondword.length) {
    console.log("Le parole sono della stessa lunghezza")
};

