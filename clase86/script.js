const user = {
    name: 'Ama',
    email: 'ama@ada.com',
    password: 'ama123',
};

const pet = {
    name: 'zeta'
}

fetch('https://ada-practicas-default-rtdb.firebaseio.com/', {
    method: 'POST',
    headers: {
        "Contetent-Type" : "Application/json"
    },
    body: JSON.stringify(user),
}).then((response) => {
    console.log(response);
});