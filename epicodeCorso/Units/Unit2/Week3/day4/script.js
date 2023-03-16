const myUrl1 = 'https://api.pexels.com/v1/search?query=Cars';


const createImageElement = function (src) {
    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.classList.add('h-100');
    return img;
}

const displayEvent = function (pics) {
    let btnLoadImgs = document.querySelector('.btn-primary');
    btnLoadImgs.addEventListener('click', function () {
        let imagesPlaceholders = document.querySelectorAll('.bd-placeholder-img');
        imagesPlaceholders.forEach((placeholder, index) => {
            let img = createImageElement(pics[index].src.large);
            let cardTitle = document.querySelectorAll('.card-title');
            cardTitle.innerHTML = `${pics[index].alt}`
            placeholder.parentNode.replaceChild(img, placeholder);
            let editBtn = document.querySelectorAll('.btn__edit');
            editBtn.forEach(btn => {
                btn.innerHTML = 'Hide';
                btn.addEventListener('click', function () {
                    let cards = document.getElementsByClassName('card', 'shadow-sm');
                    cards.forEach(c => {
                        c.classList.add('d-none')

                    })
                })
            })
        })
    })
}

const getCarPics = async function () {

    let pics = [];
    try {
        let res = await fetch(
            myUrl1, {
            headers: {
                Authorization: '3MrD7Co8Rs5B5aG1hnr3mOCzzsU26CirRfgo3A1D0croPgJNaElBxG30'
            }
        }
        )
        if (res.ok) {
            let data = await res.json()
            pics = data.photos;
            console.log(pics)
            displayEvent(pics)
        } else {
            return new Error('Problema nel parsing della response')
        }
    } catch (err) {
        console.log(err.message);
    }
}

getCarPics()






const displayEvent1 = function (pics) {
    let btnSecondaryImgs = document.querySelector('.btn-secondary');
    btnSecondaryImgs.addEventListener('click', function () {
        let imagesPlaceholders = document.querySelectorAll('.bd-placeholder-img');
        imagesPlaceholders.forEach((placeholder, index) => {
            let img = createImageElement(pics[index].src.large);
            placeholder.parentNode.replaceChild(img, placeholder);
            let editBtn = document.querySelectorAll('.btn__edit');
            editBtn.forEach(btn => {
                btn.innerHTML = 'Hide';
                btn.addEventListener('click', function () {
                    let cards = document.getElementsByClassName('card', 'shadow-sm');
                    cards.forEach(c => {
                        c.classList.add('d-none')

                    })
                })
            })
        })
    })
}

const myUrl2 = 'https://api.pexels.com/v1/search?query=Tigers';

const getSecondaryPics = async function () {

    let pics = [];
    try {
        let res = await fetch(
            myUrl2, {
            headers: {
                Authorization: '3MrD7Co8Rs5B5aG1hnr3mOCzzsU26CirRfgo3A1D0croPgJNaElBxG30'
            }
        }
        )
        if (res.ok) {
            let data = await res.json()
            pics = data.photos;
            console.log(pics)
            displayEvent1(pics)
        } else {
            return new Error('Problema nel parsing della response')
        }
    } catch (err) {
        console.log(err.message);
    }
}

getSecondaryPics()