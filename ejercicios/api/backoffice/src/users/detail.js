const urlBase = 'https://ada-api-clase-86-default-rtdb.firebaseio.com'

const params = new URLSearchParams(window.location.search)
// for (const param of params) {
//     console.log(param)
// }
const id = params.get('name');

const mostrarInfo = (data) => {
    const card = document.getElementsById('card');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const pp = document.createElement('p');
    
    h5.innerHTML = data.user;
    p.innerHTML =  data.email;
    pp.innerHTML = data.password;
    
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