// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre,
// y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado
// y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

const ingresarNombre = () => {
    let saludo = window.prompt('Ingrese nombre'); 
    let mostrar = document.querySelector('#mostrarNombre');
    mostrar.innerHTML = '<h1>Hola, ' + saludo + ' </h1>';
 }
 
 // Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, 
 //y una vez ingresado ponga el color de fondo del body con dicho color.
 
 const ingresarColor = () => {
     let color = window.prompt('Ingrese el el color en sistema decimal y cambie el color de fondo');
     document.body.style.backgroundColor = color;
 }
 
 // Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes 
 //a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. 
 //Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
 const colorRGB = () => {
 
     let color1 = window.prompt('Ingrese el color 1 en RGB');
     let color2 = window.prompt('color 2');
     let color3 = window.prompt('color 3');
     let color = `rgb(${color1}, ${color2}, ${color3})`;
     document.body.style.backgroundColor = color;
 
 }
 // Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen 
 //(siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida
 // modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica =>	    200px
// mediana =>	500px
// grande =>	800px



 // Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, 
 //de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, 
 //siguiendo las siguientes reglas:
 
 // Temperatura	Color
 // Menor a 0°	                        => Azul
 // Mayor o igual a 0° y menor a 15°	    => Celeste
 // Mayor o igual a 15° y menor a 25°	=> Verde
 // Mayor o igual a 25° y menor a 30°	=> Amarillo
 // Mayor o igual a 30° y menor a 35°	=> Naranja
 // Mayor a 35°                          => Rojo
 const temperatura = () => {
     let temp = window.parseInt(prompt('Ingrese la temperatura en numeros'));
     let h1 = document.getElementById("temp");
     h1.appendChild(document.createTextNode(`temperatura actual: ${temp} °`));
 
     if(temp < 0){
         h1.style.color = 'blue';
     }
     if(temp >= 0 && temp < 15){
         h1.style.color = 'lightblue';
     }
     if(temp >= 15 && temp < 25){
         h1.style.color = 'green';
     }
     if(temp >= 25 && temp < 30){
         h1.style.color = 'yellow';
     }
     if(temp >= 30 && temp < 35){
         h1.style.color = 'orange';
     }
     if(temp > 35){
         h1.style.color = 'red';
     }
 }
 // Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante 
 //un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente 
 //(si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)

 const progreso = () => {
    const contenedor = document.createElement('div');
    const barra = document.createElement('div');
    const progreso = parseInt(prompt('Ingrese el porcentaje de su barra de progreso: '));

    contenedor.style.backgroundColor = 'lightgrey';
    barra.style.backgroundColor = 'teal';
    barra.style.height = '20px';
    barra.style.width = `${progreso}%`;

    document.body.appendChild(contenedor);
    document.appendChild(barra);
  };

 // Crear una función crearUsuario que reciba como argumento un callback. 
// La función debe pedir mediante un prompt ingresar el nombre de un usuario, y luego ejecutar el callback.
const crearUsuario = (callback) =>{
    let usuario = prompt('Por favor ingrese su nombre de usuario:');
    console.log(usuario);
    callback();
}
const confirmarCreacion = () => alert("Usuario creado!"); // callback

// crearUsuario(confirmarCreacion);

// Por favor, ingrese su nombre
// Ada Lovelace
// Usuario creado!

// Crear una función validarUsuario que reciba como argumento un callback validador. 
//El callback debe ser una función que tome un string como argumento, haga alguna validación, 
//y devuelva true o false si pasa dicha validación o no. La función validarUsuario, al ejecutarse, 
//debe pedir mediante un prompt ingresar el nombre de un usuario, pasar dicho nombre como 
//argumento del callback validador y en base a lo que el callback devuelva, mostrar un mensaje 
//si el usuario ingresado es correcto o no.
const validarUsuario = (callback) => {
 let usuario = prompt('Por favor ingrese nombre de usuario: ');
 if(callback(usuario)){
     alert('Tu usuario ha sido validado')
 } else {
     alert('FATAL ERROR')
 }
}
const validacion = (usuario) => {
    if(usuario.length > 5 ){
        return true
     } else {
         return false
     }
}

// Ejemplos de validaciones (solo tiene que validar una de ellas):

// - que no tenga espacios
// - que tenga más de X caracteres
// - que no tenga números
// - que tenga mayúsculas

// Crear una función map que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - obtenga el resultado
// - lo pushee a un nuevo array
// - devuelva el array final con el resultado de cada una de las llamadas al callback.
const numeros = [1, 2, 3]; 

const map = (numeros, callback) => {
    const numerosDuplicados = [];
    for(numero of numeros){
        numerosDuplicados.push(callback(numero));
    }
    return numerosDuplicados
}
const duplicar = (x) => x * 2;

let resultado = map(numeros, duplicar) // [2, 4, 6]
console.log(resultado)
// Ejemplo:
// const numeros = [1, 2, 3]
// const duplicar = (x) => x * 2
// map(numeros, duplicar) // [2, 4, 6]

// Crear una función filter que acepte un array y un callback y que:
// - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
// - si dicho callback devuelve true, pushea el elemento a un nuevo array
// - devuelva el array final con los elementos que pasaron el "filtro".
const numeros2 = [10, 2, 3, 40, 33, 50];
const filter = (numeros2, callback) => {
    const numerosMultiplosDe10 = [];
    for(numero of numeros2){
        if(numero === multiploDe10){
            numerosMultiplosDe10.push(callback(numero))
        } 
    }
    return numerosMultiplosDe10;
}
const multiploDe10 = (x) => x % 10 === 0;

let resultadoFilter = filter(numeros2, multiploDe10) // [10, 40, 50]
console.log(resultadoFilter)
// Ejemplo:
// const numeros = [10, 2, 3, 40, 33, 50]
// const multiploDe10 = (x) => x % 10 === 0
// filter(numeros, multiploDe10) // [10, 40, 50]