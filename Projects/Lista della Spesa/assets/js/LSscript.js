const input = document.getElementById('myInput');
const addBtn = document.getElementById('addBtn');
const list = document.querySelector('#myList');
const error = document.querySelector('#error');
const congrats = document.getElementById('congrats');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(`Number of checkboxes: ${checkboxes.length}`);

addBtn.addEventListener('click', function () {
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    if (input.value === '') {
        error.style.display = 'block';
        return;
    } else {
        li.appendChild(checkBox);
        li.appendChild(document.createTextNode(input.value));
        delBtn.innerHTML = 'Delete Article';
        delBtn.className = 'delBtn';
        list.appendChild(li);
        li.appendChild(delBtn);
    }

    checkBox.addEventListener('click', function () {
        console.log(checkBox.checked);
        if (checkBox.checked) {
            li.style.backgroundColor = 'yellow';
            congrats.style.display = "block";
            setTimeout(function () {
                congrats.style.display = 'none';
            }, 3000);
        } else {
            li.style.backgroundColor = "white";
        }
    })

    input.value = '';
    delBtn.addEventListener('click', function () {
        list.removeChild(li);
    })
});


input.addEventListener('input', function () {
    if (input.value !== '') {
        error.style.display = 'none';
    }
});

const elem = document.getElementById("myElement");
elem.style.animationPlayState = "running"; // start the animation
elem.style.animationPlayState = "paused"; // stop the animation
