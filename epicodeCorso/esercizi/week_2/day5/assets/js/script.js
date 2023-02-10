const visuale = document.querySelector('.visuale');
const risultato = document.querySelector('.risultato');
const tasti = document.querySelectorAll('button');

tasti.forEach(tasto => { tasto.addEventListener('click', calcola) }) // event listener per ogni click dei tasti ed 
// eseguirà la funzione
function calcola() {
    var tastoScritta = this.innerText; // scrive il testo di quello che viene cliccato
    //console.log(tastoScritta);
    if (tastoScritta === 'C') { //se viene premuto C si cancella l'equazione ed il risultato
        visuale.innerText = '';
        risultato.innerText = '';
        return;
    }

    if (tastoScritta === '=') {
        risultato.innerText = eval(visuale.innerText); // valuta l'espressione che viene inserita nella visuale e ci da il risultato
    }


    else {
        visuale.innerText += tastoScritta; // senno visualizza ciò che è stato cliccato
        return;
    }

}
