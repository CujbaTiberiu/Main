// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const myArray2 = giveMeRandom(10);
console.log(myArray2);
//console.log(myArray2.filter(maggiori5))
function boh() {
    arr = myArray2.filter(maggiore5);
    function maggiore5(x) {
        return x > 5;
    }
    console.log("Values greater than 5:", arr);
    const sum = arr.reduce((acc, curr) => acc + curr, 0);//acc = accumulated value curr = current value
    console.log("Sum of values greater than 5:", sum);
}

boh();
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function Acquisto(price, name, id, quantity) {
    this.price = price;
    this.name = name;
    this.id = id;
    this.quantity = quantity;
    //this.finalPrice = function() {
    //    return this.finalPrice = this.price * this.quantity;
    // }
};
const edera = new Acquisto(10, 'Edera', 'pianta', 2);
const mappa = new Acquisto(15, 'Mappa', 'cartina geografica', 4);
var shoppingCart = [edera, mappa];
var shoppingCartTotal = function () {
    let total = 0;
    for (var i = 0; i < shoppingCart.length; i++) {
        total += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return total;
}
console.log(shoppingCartTotal());



//function sumArrayElements(shoppingCart,1, index2) {
// const sum = arr[index1] + arr[index2];
// return sum;}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const batteria = new Acquisto(20, 'Duracell', 'pila', 5);
addToShoppingCart(batteria);

function addToShoppingCart(article) {
    shoppingCart.push(article);
    console.log(`L'array ora contiene ${shoppingCart.length} elementi`);
    console.log(shoppingCart);
}
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart() {
    var max = shoppingCart[0].price;
    var myArticle = shoppingCart[0];

    for (var i = 1; i < shoppingCart.length; i++) { //shoppingCart.map((element) => {
        var element = shoppingCart[i];
        if (element.price > max) {
            max = element.price;
            myArticle = element;
        }
    }

    console.log(`L'articolo con il prezzo più alto è ${myArticle.name}, che costa Euro ${max}`);
}
/*
maxShoppingCart();
const maxItem = shoppingCart.reduce((acc, curr) => (curr.price > acc.price ? curr : acc), shoppingCart[0]);
console.log(`L'articolo con il prezzo più alto è ${maxItem.name}, che costa Euro ${maxItem.price}`);
*/
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
var miaData = new Date(2023, 01, 01);
var miaData2 = new Date(2023, 0, 01);

console.log(daysPassed(miaData));
console.log(daysPassed(miaData2));

function daysPassed(data) {
    let oggi = new Date();
    let diff = oggi - data;
    diff = Math.floor(diff / 1000 / 60 / 60 / 24);
    return `dal ${data} a ${oggi} sono passati ${diff} giorni`;
}


/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
