const PRODOTTI_URL = 'https://striveschool-api.herokuapp.com/api/product/';
let eventId = new URLSearchParams(window.location.search).get('eventId')
let formReference = document.getElementsByTagName('form')[0]
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
            document.getElementsByClassName('btn__save')[0].innerHTML = 'Save Change'
            document.getElementById('delete').classList.remove('d-none')
            let btnReset = document.getElementsByClassName('btn__reset')[0]
            btnReset.classList.remove('d-none');
            btnReset.addEventListener('click', function () {
                formReference.reset()
                document.getElementById('delete').classList.add('d-none')
            })
        })
        .catch((err) => {
            console.log(err)
        })
}


let deleteButnRef = document.getElementById('delete')
deleteButnRef.addEventListener('click', async () => {
    let response = await fetch(PRODOTTI_URL + eventId, {
        method: 'DELETE',
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA",
        }
    })
    console.log(response)
    if (response.ok) {
        let deleteResponse = await response.json();
        if (deleteResponse) {
            alert('PRODOTTO ELIMINATO CORRETTAMENTE')
            window.location.replace('./index.html')
        } else {
            alert("PROBLEMA NELL'ELIMINAZIONE DEL PRODOTTO")
        }
    } else {
        alert("PROBLEMA NELL'ELIMINAZIONE DEL PRODOTTO")
    }
})

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
            if (eventId) {
                alert('PRODOTTO AGGIORNATO CORRETTAMENTE')
            } else {
                alert('PRODOTTO AGGIUNTO CORRETTAMENTE')
            }
            window.location.replace('./index.html')
        } else {
            alert("PROBLEMA NEL SALVATAGGIO DEL PRODOTTO")
        }
    } catch (error) {
        console.log(error)
    }
}

formReference.addEventListener('submit', (e) => {
    e.preventDefault()

    let newProduct = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        brand: document.getElementById('brand').value,
        imageUrl: document.getElementById('image').value,
        price: document.getElementById('price').value
    }

    if (!document.getElementById('delete').classList.contains('d-none')) {
        return;
    }

    console.log(newProduct)
    saveProduct(newProduct)
    formReference.reset()
});

