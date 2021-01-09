
const urlBase = 'https://ada-api-clase-86-default-rtdb.firebaseio.com';

const tableUsers = document.getElementById('users-list');

fetch(urlBase + '/users.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const tbody = tableUsers.querySelector('tbody');
        for (prop in data) {
            const user = data[prop];
            const tr = document.createElement('tr');

            for (userProp in user) {
                const td = document.createElement('td');
                if (userProp === 'user') {
                    const a = document.createElement('a');
                    a.setAttribute('href', 'detail.html?name=' + prop);
                    a.innerHTML = user[userProp];
                    td.appendChild(a);
                    tr.appendChild(td);
                }
                else {
                    td.innerHTML = user[userProp];
                    tr.appendChild(td);
                    console.log(userProp);
                }
            }
            const botonEliminar = document.createElement('button');
            botonEliminar.classList.add('btn');
            botonEliminar.innerHTML = 'Eliminar';
            const td = document.createElement('td');
            td.appendChild(botonEliminar);
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    })
    .catch(error => console.log(error))