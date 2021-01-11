const urlBase = 'https://ada-practicas-default-rtdb.firebaseio.com/';

const params = new URLSearchParams(window.location.search)
// for (const param of params) {
//     console.log(param)
// }
const id = params.get('name');
//console.log(id)

const mostrarInfo = (data) => {
    const card = document.getElementById('card');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const pp = document.createElement('p');
    h5.innerHTML = 'Usuario: ' + data.user;
    p.innerHTML = 'Email: ' + data.email;
    pp.innerHTML = 'Password: ' + data.password;
    card.appendChild(h5);
    card.appendChild(p);
    card.appendChild(pp);
}

const user = () => {
    fetch(urlBase + '/users/' + id + '.json')

        .then(response => response.json())
        .then(data => {
            mostrarInfo(data)
        })
        .catch(error => console.log(error))
}
user();
