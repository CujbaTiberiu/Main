/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 11;
let n2 = 11;
if (n1 > n2) {
    console.log(n1);
}
if (n2 > n1) {
    console.log(n2);
}
else if (n1 == n2) {
    console.log('Equal');
}



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let num = 5;
if (num !== 5) {
    console.log('not equal');
}
else {
    console.log('it\'s\ equal');
}
//console.log(num = 10);



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero5 = 22;

let numDiv = numero5 % 5 == 0 ? 'divisibile per 5' : 'non divisibile per 5';
console.log(numDiv);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numbers = [5, 3];

let valoreOtto = numbers[0] == 8 || numbers[1] == 8 || numbers[0] + numbers[1] == 8 || numbers[0] - numbers[1] == 8 || numbers[1] - numbers[0] == 8 ? 'si' : 'no';
console.log(valoreOtto);

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 60;
const spedizioni = 10;

if (totalShoppingCart > 50) {
    console.log(`Hai diritto alla spedizione gratuita - Totale: ${totalShoppingCart}`)
} else if (totalShoppingCart < 50) {
    console.log(`Non hai diritto all spedizione gratuita - Totale: ${totalShoppingCart + spedizioni}`)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart1 = 80;
const spedizioni1 = 10;
const prezzoScontato = totalShoppingCart1 - (totalShoppingCart1 * 20 / 100);

if (prezzoScontato > 50) {
    console.log(`Hai diritto alla spedizione gratuita - Totale: ${prezzoScontato}`)
} else if (prezzoScontato < 50) {
    console.log(`Non hai diritto all spedizione gratuita - Totale: ${prezzoScontato + spedizioni1}`)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n_1 = 8;
let n_2 = 9;
let n_3 = 4;
var numeriOrdinati = [n_1, n_2, n_3];

if (n_1 > n_2 && n_1 > n_3 && n_2 > n_3) {
    numeriOrdinati = [n_1, n_2, n_3];
}
if (n_2 > n_1 && n_2 > n_3 && n_1 > n_3) {
    numeriOrdinati = [n_2, n_1, n_3];
}
if (n_3 > n_1 && n_3 > n_2 && n_1 > n_2) {
    numeriOrdinati = [n_3, n_1, n_2];
}
console.log(numeriOrdinati);


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let casualNumber = 4;
let compare = (typeof casualNumber == 'number') ? 'è un numero' : 'non è un numero';
console.log(compare);
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let pariDispari = casualNumber % 2 == 0 ? 'Pari' : 'Dispari';
console.log(pariDispari);


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 10) {
    console.log("Meno di 10");
} else if (val < 5) {
    console.log("Meno di 5");
} else {
    console.log("Uguale a 10 o maggiore");
}

let val1 = 7
if (val > 10) {
    console.log("Meno di 10");
} else if (val > 5) {
    console.log("Meno di 5");
} else {
    console.log("Uguale a 10 o maggiore");
}
let val2 = 7

if (val > 10) {
    console.log("Meno di 10");
} else if (val < 5) {
    console.log("Meno di 5");
} else {
    console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = 'Toronto';
console.log(me);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var myArray = [];
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArray);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray.splice(9, 9, 100);
console.log(myArray);