//Crea un array vuoto
const numbersOdd = [];

for (i= 0; i < 6; i++) {
    //Chiedo all'utente di inserire 6 numeri
    const number = Number(prompt("inserisci un numero"));
    //Se il numero è dispari lo vado ad inserire nell'arrey
    if ( number % 2 === 1) {
        numbersOdd.push(number)
    };
}
console.log(numbersOdd);
