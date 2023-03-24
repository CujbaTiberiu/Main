const ALBUM_URL = ' https://striveschool-api.herokuapp.com/api/deezer/album/'

let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('eventId', eventId)

if (eventId) {

    fetch(ALBUM_URL + eventId, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                return new Error('Error!')
            }
        })
        .then((album) => {
            console.log(album)


        })
        .catch((err) => {
            console.log(err)
        })
}



/*
fetch(ALBUM_URL)
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
*/