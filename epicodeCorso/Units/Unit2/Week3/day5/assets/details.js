const PRODOTTI_URL = 'https://striveschool-api.herokuapp.com/api/product/';
let eventId = new URLSearchParams(window.location.search).get('eventId')

console.log('ID', eventId)

const showSingleProduct = async function () {
    try {
        let response = await fetch(PRODOTTI_URL + eventId, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA"

            }
        })

        if (response.ok) {
            let productData = await response.json()
            console.log(productData)

            let containerDivReference = document.getElementsByClassName('col')[0]
            containerDivReference.innerHTML =
                `<div class="img-fluid"><img class="w-75" src=${productData.imageUrl}></div>
            <h3 class="my-3">Name: ${productData.name}</h3>
            <p class="text-white">Descriprion: ${productData.description}</p>
            <p class="text-white"> Brand: ${productData.brand}</p>
            <p class="text-white">Price: ${productData.price}€</p>`



        } else {
            return new Error("Problema nel recuperare il prodotto")
        }
    } catch (error) {
        console.log(error)
    }
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
        alert('PRODOTTO ELIMINATO CORRETTAMENTE')
        window.location.replace('./index.html')
    } else {
        alert("PROBLEMA NELL'ELIMINAZIONE DEL PRODOTTO")
    }

})
showSingleProduct()