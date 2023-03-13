//Esercizio nr.1
class User {
    constructor(_firstName, _lastName, _age, _location) {
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    biggestAge(class1, class2) {
        return (class1.age > class2.age) ? console.log(`${class1.firstName} ${class1.lastName} è più vecchio di ${class2.firstName} ${class2.lastName}`) : console.log(`${class2.firstName} ${class2.lastName} è più vecchio di ${class1.firstName} ${class1.lastName}`)
    }
};

const utente1 = new User('Mario', 'Rossi', '50', 'Italy');
const utente2 = new User('John', 'Smith', '40', 'U.S.A.');

console.log(utente1);
console.log(utente2);
utente1.biggestAge(utente1, utente2);






// Esercizio nr.2

let petsList = document.getElementById('pets-list');
let ownerOfMorePets = document.getElementById('isSameOwner');

let pets = [];

class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    static sameOwner() {
        const ownerNames = pets.map(pet => pet.ownerName);
        const noDublicates = new Set(ownerNames);
        return noDublicates.size !== ownerNames.length;
    }
}


const createList = () => {
    petsList.innerHTML = '';
    pets.forEach((pet) => {
        const newLi = document.createElement('li');
        newLi.innerText = `Pet name: ${pet.petName}, Owner name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
        petsList.appendChild(newLi);
    })
}

const myForm = document.querySelector('#myForm');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(myForm);
    const petNameValue = formData.get('petName');
    const ownerNameValue = formData.get('ownerName');
    const speciesValue = formData.get('species');
    const breedValue = formData.get('breed');

    const pet_Submit = new Pet(petNameValue, ownerNameValue, speciesValue, breedValue);
    pets.push(pet_Submit);

    console.log(Pet.sameOwner());

    ownerOfMorePets.innerHTML = `Is there a owner with more than one pet: ${Pet.sameOwner()}`;

    myForm.reset();

    createList();
});


