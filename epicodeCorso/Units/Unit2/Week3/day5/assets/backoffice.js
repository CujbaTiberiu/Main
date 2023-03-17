const PRODOTTI_URL = 'https://striveschool-api.herokuapp.com/api/product/';
let eventId = new URLSearchParams(window.location.search).get('eventId')
console.log('eventId', eventId)


if (eventId) {

    fetch(PRODOTTI_URL + eventId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA",
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
        .then((productData) => {
            console.log(productData)

            document.getElementById('name').value = productData.name
            document.getElementById('description').value = productData.description
            document.getElementById('brand').value = productData.brand
            document.getElementById('image').value = productData.imageUrl
            document.getElementById('price').value = productData.price
            document.getElementsByClassName('btn__change')[0].innerHTML = 'Salva Modifica'
        })
        .catch((err) => {
            console.log(err)
        })
}



const saveProduct = async function (newProduct) {
    try {
        let url = eventId ? PRODOTTI_URL + eventId : PRODOTTI_URL

        let response = await fetch(url, {
            method: eventId ? 'PUT' : 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA",
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            alert('PRODOTTO SALVATO CORRETTAMENTE')
        } else {
            alert("PROBLEMA NEL SALVATAGGIO DEL PRODOTTO")
        }
    } catch (error) {
        console.log(error)
    }
}

let formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', (e) => {
    e.preventDefault()

    let newProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('image').value,
        price: document.getElementById('price').value
    }
    console.log(newProduct)
    saveProduct(newProduct)
    formReference.reset()
});

