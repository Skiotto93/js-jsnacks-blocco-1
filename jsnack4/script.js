const invitati = ['Vincenzo', 'Simone', 'Antonio'];

const presenti = prompt("inserisci il tuo nome");

let found = false;

for (let i = 0; i < invitati.length; i++) {
    if (presenti === invitati[i]) {
        found = true;
    }
}

if (found) {
    alert("accesso acconsentito")
} else {
    alert("accesso negato")
};