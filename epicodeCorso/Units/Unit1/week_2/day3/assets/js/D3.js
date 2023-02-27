/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero1 = 2;
let numero2 = 5;

var maggiore = numero1 > numero2 ? numero1 : numero2;
console.log("il numero piu grande è" + " " + maggiore);
document.getElementById("esercizio1").innerHTML =
  "il numero piu grande è" + " " + maggiore;

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let numero3 = 4;
let numero4 = 5;

var notEqual = numero3 == numero4 ? "equal" : "not Equal";
console.log(notEqual);
document.getElementById("esercizio2").innerHTML = notEqual;

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero5 = 20;

var divisibile = numero5 % 5 == 0 ? "divisibile per 5" : "non divisibile per 5";
console.log(divisibile);
document.getElementById("esercizio3").innerHTML = divisibile;

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero6 = 8;
let numero7 = 4;
var otto =
  numero6 == 8 ||
  numero7 == 8 ||
  numero6 + numero7 == 8 ||
  numero6 - numero7 == 8 ||
  numero7 - numero6 == 8
    ? "verificato"
    : "non verificato";
console.log(otto);
document.getElementById("esercizio4").innerHTML = otto;

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var totalShoppingCart = 61;
var spedizione = 10;
var totalCost;

if (totalShoppingCart > 50) {
  totalCost = totalShoppingCart;
  document.getElementById("esercizio5").innerHTML =
    "Hai diritto alla spedizione gratuita - Totale da pagare" + " " + totalCost;
  console.log(
    "Hai diritto alla spedizione gratuita - Totale da pagare" + " " + totalCost
  );
} else {
  totalCost = totalShoppingCart + spedizione;
  document.getElementById("esercizio5").innerHTML =
    "Non hai il diritto alla spedizione gratuita - Totale da pagare" +
    " " +
    totalCost;
  console.log(
    "Non hai il diritto alla spedizione gratuita - Totale da pagare" +
      " " +
      totalCost
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var scontato = totalShoppingCart - totalShoppingCart * 0.2;

if (scontato > 50) {
  totalCost = scontato;
  document.getElementById("esercizio6").innerHTML =
    "Hai diritto alla spedizione gratuita - Totale da pagare" + " " + totalCost;
  console.log(
    "Hai diritto alla spedizione gratuita - Totale da pagare" + " " + totalCost
  );
} else {
  totalCost = scontato + spedizione;
  document.getElementById("esercizio6").innerHTML =
    "Non hai il diritto alla spedizione gratuita - Totale da pagare" +
    " " +
    totalCost;
  console.log(
    "Non hai il diritto alla spedizione gratuita - Totale da pagare" +
      " " +
      totalCost
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var n1 = 55;
var n2 = 10;
var n3 = 28;

var riordinato = [n1, n2, n3];

if (n1 > n2 && n1 > n3) {
  if (n2 > n3) {
    riordinato = [n3, n2, n1];
  } else {
    riordinato = [n2, n3, n1];
  }
} else if (n2 > n1 && n2 > n3) {
  if (n1 > n3) {
    riordinato = [n3, n1, n2];
  } else {
    riordinato = [n1, n3, n2];
  }
} else if (n3 > n1 && n3 > n2) {
  if (n1 > n2) {
    riordinato = [n2, n1, n3];
  } else {
    riordinato = [n1, n2, n3];
  }
}
riordinato.sort();
console.log(riordinato);

/*
var n1 = 10;
var n2 = 58;
var n3 = 28;

var riordinato = [n1, n2, n3];
console.log(riordinato);
document.getElementById('esercizio7').innerHTML = riordinato;


riordinato.sort();
console.log(riordinato);
document.getElementById('esercizio7.1').innerHTML = riordinato;
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var esercizio = 10;
document.getElementById("esercizio8").innerHTML = typeof esercizio;

var numbers = typeof esercizio == "number" ? "si" : "no";
document.getElementById("esercizio8").innerHTML =
  "è un numero?" + " " + numbers;
console.log(numbers);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var casualNumber = 9;

if (casualNumber % 2 == 0) {
  document.getElementById("esercizio9").innerHTML = "è un numero pari!";
  console.log("è un numero pari!");
} else {
  document.getElementById("esercizio9").innerHTML = "è un numero dispari!";
  console.log("è un numero dispari!");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
  document.getElementById("esercizio10").innerHTML = "Meno di 10";
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

let val2 = 7;
if (val2 > 10) {
  console.log("Meno di 10");
} else if (val2 > 5) {
  console.log("Meno di 5");
  document.getElementById("esercizio10-2").innerHTML = "Meno di 5";
} else {
  console.log("Uguale a 10 o maggiore");
}

let val3 = 7;
if (val3 > 10) {
  console.log("Meno di 10");
} else if (val3 < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
  document.getElementById("esercizio10-3").innerHTML = "Uguale a 10 o maggiore";
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me);
document.getElementById("esercizio11").innerHTML = me.city;

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
delete me[1];
console.log(me);*/
//opppure

me.lastName = "";
console.log("me");
document.getElementById("esercizio12").innerHTML = me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".


/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var NumeriDiversi = [];
NumeriDiversi.splice(0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(NumeriDiversi);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
NumeriDiversi.splice(-1, 1, 100);
console.log(NumeriDiversi);
/* SCRIVI QUI LA TUA RISPOSTA */
