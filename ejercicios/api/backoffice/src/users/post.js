
const urlBase = 'https://ada-practicas-default-rtdb.firebaseio.com/';

const btn = document.getElementById('btn');
const formulario = document.getElementById('form-add-user');
const spinner = document.getElementById('spinner');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const userInput = document.getElementById('user');

const params = new URLSearchParams(window.location.search)
// for (const param of params) {
//     console.log(param)
// }
// si id null quiere decir que un POST
// sino tengo que hacer un Patch
const id = params.get('name');



const mostrarInfo = (data) => {
    userInput.value = data.user;
    emailInput.value = data.email;
    passwordInput.value = data.password;
}

const user = () => {
    fetch(urlBase + '/users/' + id + '.json')
        .then(response => response.json())
        .then(data => {
            mostrarInfo(data)
        })
        .catch(error => console.log(error))
}

if (id) {
    user();
}

const method = id ? "PATCH" : "POST";

const url = `${urlBase}/users${id ? `/${id}` : ""}.json`;


const crearObjeto = () => {
    const email = emailInput.value
    const password = passwordInput.value;
    const user = userInput.value;

    return { user, password, email }
}
// si no tengo id urlBase + '/users.json'
// si tengo la id urlBase/users/id.json
const registrarUsuario = (e) => {
    e.preventDefault();
    spinner.classList.add('d-inline-block');
    spinner.classList.remove('d-none');
    fetch(url, {
        method,
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