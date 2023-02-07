const esercizio1 = document.getElementById('concatena');
const esercizio2 = document.getElementById('concatena2');

var nome = 'Aldo';
let ruolo = 'cliente';
const pgreco = 3.14;

esercizio1.innerHTML = nome + ', ' + ruolo + ', ' + pgreco;

var completo = nome + ', ' + ruolo + ', ' + pgreco;

esercizio2.innerHTML = completo;

// es. 3  part-1

var nome1 = 'Mario';
document.getElementById('var').innerHTML = nome1;

{
    let nome1 = 'Carla';
    document.getElementById('let').innerHTML  = nome1;
}

document.getElementById('final').innerHTML  = nome1;

//es. 3 part-2

var nome2 = 'Carla';

{
    let nome2 = 'Mario';
    document.getElementById('let2').innerHTML  = nome2;
}

document.getElementById('final2').innerHTML  = nome2;
document.getElementById('let3').innerHTML = nome2;

// es. 4

const iniziale = 15;

// 0.1
document.getElementById('iniziale').innerHTML += iniziale;

// 0.2
var addizione = iniziale + 15;
document.getElementById('valore1').innerHTML += addizione + ', ' + (++addizione);

//0.3
var sottrazione = iniziale - 10;
document.getElementById('valore2').innerHTML += sottrazione + ', ' + (--sottrazione);

//0.4
document.getElementById('valore3').innerHTML += iniziale*3;

//0.5
document.getElementById('valore4').innerHTML += iniziale/3;

//0.5
document.getElementById('valore5').innerHTML += iniziale + ' ' + 'é un numero';