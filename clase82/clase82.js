//  promesas
// new es la palabra reservada que crea objetos
const callback = (resolve, reject) => {
    const promesaExitosa = true;

    const response = {
        success: promesaExitosa,
        data: {
            user: 'Ama',
            email: 'ama@gmail.com',
            password: '12345'
        }
    }

    if(promesaExitosa){
        resolve(response);
    } else {
        reject(response)
    }
}

const miPromesa =  new Promise(callback);

miPromesa
    .then((respuesta) => {
        if(respuesta.success){
            console.log(`la promesa devolvio el usuario ${JSON.stringify(respuesta.data.user)}` )
        }
    })
    .catch((error) => {
        console.log(error);
    });

/** <<< RESULTADO >>>
 console.log(miPromesa);
 Promise {<fulfilled>: "se cumplio lo prometido"}
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "se cumplio lo prometido"

las promesas tienen metodos que te permiten obtener el resultado de
la promesa

then -> la devolucion, recibe un callback con la respuesta esperada en cas de 
ser exitoso

1. declaramos una variable que contiene una promesa(un objeto)
2. la promesa a su vez recibe un callback
3. el callback recibe dos parametros

resolve -> la primera es una funcion que contiene lo que queremos que 
ocurra al momento de ejecutarse la promesa

reject -> la segunda es lo que pasará si lo que queremos que pase
no se ejecuta por alguna razon

cuando se produce el exito se llama a resolve y si no se prodice llamas a reject

.then es para resolve EXITO
.catch es para reject ERROR -> atrapar, capturar el error antes de que rompra nuestra aplicacion

 */

//  protocolo http
// para manipular datos 

// métodos http
// GET -> pedir datos
// POST -> enviando datos para que se guarden somewhere
// PUT -> enviar datos que necesitan actualizarcw
// DELETE -> para eliminar un dato existente

// API
/**
 Aplicacion alojada en un servidor a la espera de que un usuarioo
 que haga las peticiones a traves de los metodos de http 


 frontend
 cliente - url del browser
 http://miapp.com/servicios
 
 backend
 endpoints

 ape.get('/usuarios'.function) {
    ---> va a la base de datos y devuelve la info
    return usuarios
 }
 api.get('/').function(){
     ---> va la base de datos de datos y devuelve el contenido de home
 
     return homeData
}

api.post('/usuarios').function(usuario){
    va a la base de datos y registra al nuevo usuario
}
//   return {
//     success : true,
//     user: userResponse
//   }

// }
 */

//  REST API
/**
 
 */

// fetch

// path params