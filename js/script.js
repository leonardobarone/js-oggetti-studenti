// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
    "nome" : "Leonardo",
    "cognome" : "Barone",
    "eta" : "28"
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (key in studente) {
    console.log(key);
}
// Creare un array di oggetti di studenti.
var studenti = [
    {
        "nome" : "Leonardo",
        "cognome" : "Barone",
        "eta" : 28
    },
    {
        "nome" : "Gianluca",
        "cognome" : "Capozzi",
        "eta" : 46
    },
    {
        "nome" : "Gerry",
        "cognome" : "Scotti",
        "eta" : 65
    }
];

console.log("« FINE PRIMO ESERCIZIO »");

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var i = 0; i < studenti.length; i++) {
    console.log(studenti[i].nome + " " + studenti[i]["cognome"]);
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// var nuovoStudente = {
//     "nome" : prompt("inserisci nome nuovo studente"),
//     "cognome" : prompt("inserisci cognome nuovo studente"),
//     "eta" : parseInt(prompt("inserisci eta nuovo studente")),
// };

// studenti.push(nuovoStudente);
console.log(studenti);
