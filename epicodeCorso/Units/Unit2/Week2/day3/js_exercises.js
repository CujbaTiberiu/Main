/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dichiara una variabile di nome "myself" e assegnale come valore il tuo nome.
*/
const myself = 'Tiberiu'
console.log('Esercizio 1', myself)
/* ESERCIZIO 2
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish', 'chinchilla']

console.log('Esercizio 2', pets)
/* ESERCIZIO 3
    Scrivi del codice per aggiungere all'array pets un nuovo elemento.
*/
pets.push('rabbit')
console.log('Esercizio 3', pets)


/* ESERCIZIO 4
    Scrivi del codice per rimuovere dall'array pets l'ultimo elemento aggiunto.
*/
pets.pop()
console.log('Esercizio 4', pets)

/* ESERCIZIO 5
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
let firstPet = pets.shift()
pets.push(firstPet)
console.log('Esercizio 5', pets)


/* ESERCIZIO 6
    Cicla gli elementi dell'array pets, e stampa true in console se l'animale comincia con la lettera "c". Stampa false in caso contrario.
*/

const petsFisrtLetterC = () => {
    return pets.map(pet => pet.slice(0, 1) === 'c')
}

console.log('Esercizio 6', petsFisrtLetterC())


/* ESERCIZIO 7
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'red',
        trims: ['titanium', 'st', 'active'],
    },
    {
        brand: 'Peugeot',
        model: '208',
        color: 'blue',
        trims: ['allure', 'GT'],
    },
    {
        brand: 'Volkswagen',
        model: 'Polo',
        color: 'black',
        trims: ['life', 'style', 'r-line'],
    },
]

cars[0].licensePlate = ('FA645DZ')
cars[1].licensePlate = ('DC986KH')
cars[2].licensePlate = ('LO579MB')
console.log('Esercizio 7', cars)

/* ESERCIZIO 8
    Scrivi una funzione per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Alla fine dell'esecuzione, la funzione dovrà ritornare la nuova lunghezza dell'array cars.
*/

const addObjEnd = (arr, obj) => {
    arr.push(obj)
    return arr.length
}
let newOjbect = {
    brand: 'Chevrolet',
    model: 'Camaro',
    color: 'black',
    trims: ['big life', 'style', 'st-line'],
}

console.log('Esercizio 8', addObjEnd(cars, newOjbect))
/* ESERCIZIO 9
    Scrivi una funzione per per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justFirstTrims", sotto definito.
*/
let justFirstTrims = []
// inserisci la tua funzione qui

const pushTrims = () => {
    for (let i = 0; i < cars.length; i++)
        justFirstTrims.push(cars[i].trims[0])
}

pushTrims()
console.log('Esercizio 9', justFirstTrims)

/* ESERCIZIO 10
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console.
    Se la lunghezza del valore della proprietà "color" è uguale o minore di 4, mostra in console "Fizz".
    Altrimenti, mostra in console "Buzz".
*/

/*for (let i = 0; i < cars.length; i++) {
    if (cars[i].color[i].length <= 4) {
        return console.log('Fizz')
    } else {
        return console.log('Buzz')
    }
}*/

const carsColorLength = cars.map(car => {
    if (car.color.length <= 4) {
        return 'Fizz';
    } else {
        return 'Buzz';
    }
});

console.log('Esercizio 10', carsColorLength);

/* ESERCIZIO 11
    Utilizza il metodo .filter() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    solamente le auto che hanno più di 2 trims disponibili.
*/

const filteredCars = cars.filter((car) => car.trims.length > 2)
console.log('Esercizio 11', filteredCars)

/* ESERCIZIO 12
    Utilizza il metodo .map() sull'array cars in modo da ottenere un nuovo array in cui sono presenti
    stringhe formate nel seguente modo: "Ford Fiesta", "Peugeot 208" etc.
*/

const newArray = cars.map(element => `${element.brand} ${element.model}`);

console.log('Esercizio 12', newArray)

/* ESERCIZIO 13
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
/*
for (let i = 0; i < numericArray.length; i++) {
    console.log(numericArray[i]);
    if (numericArray[i] === 32) {
        break;
    }
}
*/

let i = 0;
while (numericArray[i] !== 32) {
    console.log(numericArray[i]);
    i++;
}


/* ESERCIZIO 14
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']

