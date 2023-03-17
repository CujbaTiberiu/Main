const PRODOTTI_URL = 'https://striveschool-api.herokuapp.com/api/product/';
const keyApi = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0Mzc4N2Y4MWI0MjAwMTM5YjI4MWIiLCJpYXQiOjE2NzkwNDY1MzUsImV4cCI6MTY4MDI1NjEzNX0._h5CDFDgS03Artx-lB5LfqeT1fH-um7D2AShiwgfYIA';
let eventId = new URLSearchParams(window.location.search).get('eventId')


const displayProducts = function (products) {
    const row = document.getElementsByClassName('row')[0]
    let Cards = ""
    products.forEach(product => {
        Cards += `<div class="card mx-4" style="width: 18rem;">
    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
    <div class="card-body position-relative">
      <h5 class="card-title mb-5 text-center">${product.name}</h5>
      <p class="card-text"></p>
      <div class="card__btns d-flex justify-content-between position-absolute bottom-0 ms-2 mb-1">
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