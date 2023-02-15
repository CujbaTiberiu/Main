class Voce {
    constructor(_nomeVoce) { //parametro
        this.nomeVoce = _nomeVoce;     //this.proprietà
    }
    voceInserita() {
        return `<b>${this.nomeVoce}</b>`;
    }
}


let lista = document.querySelector('#lista');
let nuovaVoce = document.querySelector('#nuovaVoce');
let aggungi = document.querySelector('#aggiungi');

let elenco = [];

aggungi.addEventListener('click', () => {
    if (nuovaVoce.value) {
        let voceNuova = new Voce(nuovaVoce.value);
        elenco.push(voceNuova);
        console.log(elenco);
        scriviLista();
        scriviVoce();
    } else {
        document.getElementById('errore').innerHTML =
            'Scrivere una voce nel campo di input';
        return;
    }
});

function scriviLista() {  /// utilizza
    lista.innerHTML = '';
    elenco.forEach((el, index) => { // variabile volante dove si memorizzano i vari metodi el oppure element
        lista.innerHTML += `<li>${el.voceInserita()}</li>`
    })
    nuovaVoce.value = '';
};

function scriviVoce() {
    let nuovaVoce2 = new Voce(nuovaVoce.value);
    document.getElementById('voceEsterna').innerHTML = `Questa voce <b>${nuovaVoce2.voceInserita()}</b> è inserita
sia nell'array che nel DOM, in modo isolato`};
