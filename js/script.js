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
    document.getElementById("lista").innerHTML += `<li class="lista-stile">${studenti[i].nome} ${studenti[i]["cognome"]}`;
}
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
document.getElementById("iscrivi").addEventListener("click",
    function() {
        var nuovoStudente = {
        "nome" : document.getElementById("nome").value,
        "cognome" : document.getElementById("cognome").value,
        "eta" :  parseInt(document.getElementById("eta").value),
    };
        studenti.push(nuovoStudente);
        alert("hai inserito un nuovo studente");
        document.getElementById("lista").innerHTML += `<li class="lista-stile">${nuovoStudente.nome} ${nuovoStudente["cognome"]}`
    }
);

// PULSANTE SVUOTA CAMPI
document.getElementById("svuota").addEventListener("click",
    function() {
        document.getElementById("nome").value ="";
        document.getElementById("cognome").value ="";
        document.getElementById("eta").value ="";

        alert("hai svuotato i campi");
    }
);

