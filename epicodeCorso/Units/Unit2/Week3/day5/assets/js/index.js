const PRODOTTI_URL = 'https://striveschool-api.herokuapp.com/api/product/';
const keyApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA';
let eventId = new URLSearchParams(window.location.search).get('eventId')


const displayProducts = function (products) {
    const row = document.getElementsByClassName('row')[0]
    let Cards = ""
    products.forEach(product => {
        Cards += `<div class="card mx-4 shadow">
        <a class="text-decoration-none text-black" href="./details.html?eventId=${product._id}"><img src="${product.imageUrl}" class="card-img-top justify-content-center my-2" alt="${product.name}</a>">
    <div class="card-body d-flex flex-column justify-content-between">
        <div class="justify-content-between mb-2">
      <h5 class="card-title text-center fs-3">${product.name}</h5>
      <p class="card-text fs-4 text-center">${product.price}€</p>
      </div>
      <div class="card__btns d-flex justify-content-around me-3">
      <a href="./backoffice.html?eventId=${product._id}" class="btn btn-danger mx-1">Modifica</a>
      <a href="./details.html?eventId=${product._id}" class="btn btn-info">Scopri di più</a>
      </div>
    </div>
  </div>`
    })
    row.innerHTML = Cards
}




const getProducts = function () {
    fetch(PRODOTTI_URL, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA",
            "Content-Type": "application/json",
        }
    })
        .then(res => {
            console.log(res)
            if (res.ok) {
                return res.json()
            } else {
                return new Error('Errore nella chiamata!')
            }
        })
        .then(products => {
            console.log(products)

            displayProducts(products)
        })
        .catch(err => {
            console.log(err)
        })
}

getProducts()