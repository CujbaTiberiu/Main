fetch('https://striveschool-api.herokuapp.com/books')
    .then(response => response.json())
    .then(books => {
        console.log(books)

        const container = document.querySelector('.container');
        const cartList = document.getElementById('myUl')
        const cartListTitle = document.getElementById('ulTitle');
        const row = document.createElement('div');

        row.classList.add('row', 'row-cols-1', 'row-cols-sm-2', 'row-cols-md-3', 'row-cols-lg-4', 'my-3', 'justify-content-center');

        books.forEach(book => {

            const col = document.createElement('div');
            col.classList.add('col', 'gy-3');

            const card = document.createElement('div');
            card.classList.add('card', 'h-100'); // 'd-flex', ' flex-column'

            const cardImage = document.createElement('img');
            cardImage.classList.add('card-img-top', 'img-fluid', 'h-100');
            cardImage.src = book.img;
            cardImage.alt = book.title;

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body'); // ,'flex-grow-1'

            const cardTitle = document.createElement('h5');
            cardTitle.classList.add('card-title');
            cardTitle.textContent = book.title;

            const cardPrice = document.createElement('p');
            cardPrice.classList.add('card-text');
            cardPrice.textContent = `$${book.price}`;

            const btnScarta = document.createElement('a');
            btnScarta.classList.add('btn', 'btn-outline-danger');
            btnScarta.innerHTML = 'Discard';

            const btnAdd = document.createElement('a');
            btnAdd.classList.add('btn', 'btn-outline-success', 'mx-3');
            btnAdd.innerHTML = 'Add to Cart';

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardPrice);
            cardBody.appendChild(btnScarta);
            cardBody.appendChild(btnAdd);
            card.appendChild(cardImage);
            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);

            btnScarta.addEventListener('click', function () {
                card.classList.add('d-none');
            })

            btnAdd.addEventListener('click', function () {
                cartListTitle.classList.remove('d-none');
                const newLi = document.createElement('li');
                newLi.classList.add('text-white', 'my-2', 'mx-5')
                newLi.innerText = `Title: ${book.title} | Price: ${book.price}$`;
                const btnDiscard = document.createElement('a');
                btnDiscard.classList.add('btn', 'btn-outline-danger', 'mx-2');
                btnDiscard.innerHTML = 'Discard';
                newLi.appendChild(btnDiscard);
                cartList.appendChild(newLi);
                btnDiscard.addEventListener('click', function () {
                    cartList.removeChild(newLi);
                })
            })
        })

        container.appendChild(row);


    })
    .catch(err => {
        console.log(err)
    })