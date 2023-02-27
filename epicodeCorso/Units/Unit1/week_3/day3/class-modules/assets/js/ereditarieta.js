class Utente { // classe madre - super classe
    constructor(_nome, _cognome, _eta) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.eta = _eta;
    }
    stampa() {
        return `${this.nome}, ${this.cognome}, ${this.eta}`;
    }
}


class Studente extends Utente {// sotto classe
    constructor(_nome, _cognome, _eta, _corsi = []) {
        super(_nome, _cognome, _eta)
        this.corsi = _corsi;
    }
    corsiStudente() {
        return `${this.corsi}`;
    }
}


class Docente extends Utente { // sotto classe
    skils = [];

    skilsDocente() {
        return `${this.skils}`;
    }
}

var utente1 = new Utente('Mario', 'Rossi', 28);
var studente1 = new Studente('Nicola', 'Bianchi', 25, ['HTML', 'CSS', 'Javascript']);
//studente1.corsi = ['HTML', 'CSS', 'Javascript'];
var docente1 = new Docente('Giuseppe', 'Verdi', 45);
document.skils = ['Web development', 'OOP'];


document.getElementById('utente').innerHTML = `Utente semplice ${utente1.stampa()}`
document.getElementById('studente').innerHTML = `Studente semplice ${studente1.stampa()}`;
document.getElementById('docente').innerHTML = `Docente semplice ${docente1.stampa()}`;