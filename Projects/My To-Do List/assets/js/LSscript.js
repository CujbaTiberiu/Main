const input = document.getElementById('myInput');
const addBtn = document.getElementById('addBtn');
const list = document.querySelector('myList');

addBtn.addEventListener('click', function () {
    var li = document.createElement('li');
    var delBtn = document.createElement('button');
    if (input.value === '') {
        return;
    } else {
        li.innerHTML = input.value;
        delBtn.innerHTML = 'Delete Task';
        delBtn.className = 'delBtn';
        list.appendChild(li);
        /* for (let i = 0; i < list.length; i++) {
              const icon = document.createElement('i');
              icon.className = 'bidone';
              list[i].insertAdjacentElement('afterbegin', icon);
          }*/
        li.appendChild(delBtn);
        li.addEventListener('click', function () {
            li.classList.toggle('completata');
        });
    }
    input.value = '';
    delBtn.addEventListener('click', function () {
        list.removeChild(li);
    })
});


