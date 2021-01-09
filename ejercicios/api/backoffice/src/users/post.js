const urlBase = 'https://ada-api-clase-86-default-rtdb.firebaseio.com';

const btn = document.getElementById('btn');
const formulario = document.getElementById('form-add-user');
const spinner = document.getElementById('spinner');

const crearObjeto = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = document.getElementById('user').value;

    return { user, password, email }
}

const registrarUsuario = (e) => {
    e.preventDefault();
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');
    fetch(urlBase + '/users.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(crearObjeto())
    })
        .then(response => {
            console.log(response);
            if (response.ok) {
                spinner.classList.add('d-none');
                spinner.classList.remove('d-inline-block');
            }
            return response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

formulario.addEventListener('submit', registrarUsuario);