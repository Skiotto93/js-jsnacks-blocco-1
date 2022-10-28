"use strict";
//Creo un arrey con dei numeri interi
const numbers = [1, 2, 3, 4];

//Faccio la somma di tutti i numeri dispari contenuti nell'arrey
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    if ( i % 2 === 1 ) {
    sum += numbers[i];
    }    
}
console.log(sum)