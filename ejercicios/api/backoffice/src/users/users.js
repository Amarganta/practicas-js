const urlBase = 'https://ada-practicas-default-rtdb.firebaseio.com/';

const tableUsers = document.getElementById('users-list');
const createTable = () => {
    fetch(urlBase + '/users.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const tbody = tableUsers.querySelector('tbody');
            tbody.innerHTML = '';
            for (let prop in data) {
                const user = data[prop];
                const tr = document.createElement('tr');
                for (const userProp in user) {
                    
                    const td = document.createElement('td');
                   
                        td.innerHTML = user[userProp];
                        tr.appendChild(td);
                    
                }
                const botonEliminar = document.createElement('button');
                botonEliminar.className = 'btn btn-danger';
                botonEliminar.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
                const td = document.createElement('td');
                botonEliminar.addEventListener('click', () => deleteUser(prop))

               
                td.appendChild(botonEliminar);
                tr.appendChild(td);
                tbody.appendChild(tr);
            }
        })
        .catch(error => console.log(error))
}

const deleteUser = (id) => {
    fetch(`${urlBase}/users/${id}.json`, {
        method: 'DELETE',
    }).then(() => createTable())

    console.log('Eliminar' + id)
}

createTable();