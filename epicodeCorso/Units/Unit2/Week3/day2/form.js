let buttonSave = document.getElementById('btnSave');
let nameInput = document.getElementById('nameInput');
let buttonDelete = document.getElementById('btnDelete');
let formRef = document.getElementById('myForm');
let previousName = document.getElementById('previousName');


const save = function () {
    const currentName = nameInput.value
    localStorage.setItem('NameInputValue', currentName)
    nameInput.value = ''
    console.log('name saved!')
}

const deleteStorage = function () {
    localStorage.clear()
    previousName.innerText = ''
}

nameInput.addEventListener('mouseover', function () {
    if (localStorage.getItem('NameInputValue')) {
        previousName.innerText = `Previously saved name:  ${localStorage.getItem('NameInputValue')}`

    } else {
        previousName.innerText = `No previous name saved`
    }
})

buttonSave.addEventListener('click', save)
buttonDelete.onclick = deleteStorage

//////////////// es.2


const timer = document.querySelector('.timer');
let hours = sessionStorage.getItem('hours') || 0;
let minutes = sessionStorage.getItem('minutes') || 0;
let seconds = sessionStorage.getItem('seconds') || 0;


timer.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

setInterval(() => {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }


    sessionStorage.setItem('hours', hours);
    sessionStorage.setItem('minutes', minutes);
    sessionStorage.setItem('seconds', seconds);

    const countHours = sessionStorage.getItem('hours')
    const countMinutes = sessionStorage.getItem('minutes')
    const countSeconds = sessionStorage.getItem('seconds')

    timer.innerHTML = `${countHours.padStart(2, '0')}:${countMinutes.padStart(2, '0')}:${countSeconds.padStart(2, '0')}`;
}, 1000);
