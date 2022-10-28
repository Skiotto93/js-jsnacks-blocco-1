"use strict";
//Creo un arrey con dei numeri interi
const numbers = [15, 90, 23, 7, 37, 2, 1, 15, 84, 10];

//Faccio la somma di tutti i numeri dispari contenuti nell'arrey
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    if ( i % 2 === 0 ) {
    sum += numbers[i];
    }    
}
console.log(sum)