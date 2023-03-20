const AGENDA_URL = ' https://striveschool-api.herokuapp.com/api/deezer/album/75621062'

let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('eventId', eventId)
// eventId può essere una stringa _id o null

fetch(AGENDA_URL)
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            return new Error('Error!')
        }
    })
    .then((eventData) => {
        console.log(eventData)

    })
    .catch((err) => {
        console.log(err)
    })
