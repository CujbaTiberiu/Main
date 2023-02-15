class Contatto {
    constructor(_ragSoc, _email, _pIva) {
        this.ragSoc = _ragSoc;
        this.email = _email;
        this.pIva = _pIva;
    }
    stampa() {
        return `${this.ragSoc}, Email ${this.email} Piva ${this.pIva}`
    }
}