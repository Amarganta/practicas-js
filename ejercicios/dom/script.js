// // Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre,
// // y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado
// // y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

const ingresarNombre = () => {
    let saludo = window.prompt('Ingrese nombre');
    let mostrar = document.querySelector('#mostrarNombre');
    mostrar.innerHTML = '<h1>Hola, ' + saludo + ' </h1>';
}

//  // Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, 
//  //y una vez ingresado ponga el color de fondo del body con dicho color.

const ingresarColor = () => {
    let color = window.prompt('Ingrese el el color en sistema decimal y cambie el color de fondo');
    document.body.style.backgroundColor = color;
}

//  // Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes 
//  //a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. 
//  //Los valores van del 0 al 255 y corresponden a rojo, verde y azul.
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

const personajes = getInhabitants();
const personajeIndex = personajes[2];


const agregarImagen = () => {
    let imagen = document.createElement('img');
    imagen.setAttribute('src', personajeIndex.thumbnail);
    let mostrar = document.getElementById('imagenHTML')
    mostrar.appendChild(imagen);

    let size = prompt('Ingrese el tamaño en el que desea ver la imagen: chica(200px), mediana(500px), grande(800px)');
    switch (size) {
        case 'chica':
            imagen.style.width = '200px';
            break;
        case 'mediana':
            imagen.style.width = '500px';
            break;
        case 'grande':
            imagen.style.width = '800px';
            break;
        default:
            alert('FATAL ERROR, tamaño no disponible')
            // agregarImagen(); esto es para que despues de mostrar el alert, salte al prompt de nuevo;
            break;
    }
}

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

    if (temp < 0) {
        h1.style.color = 'blue';
    }
    if (temp >= 0 && temp < 15) {
        h1.style.color = 'lightblue';
    }
    if (temp >= 15 && temp < 25) {
        h1.style.color = 'green';
    }
    if (temp >= 25 && temp < 30) {
        h1.style.color = 'yellow';
    }
    if (temp >= 30 && temp < 35) {
        h1.style.color = 'orange';
    }
    if (temp > 35) {
        h1.style.color = 'red';
    }
}
//  // Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante 
//  //un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente 
//  //(si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)
const progressBar = () => {
    const section2 = document.getElementById('progressBar');

    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    div1.style.backgroundColor = 'grey';
    div1.style.width = '1200px';
    div2.style.height = '20px'

    let porcentaje = prompt('Ingrese el porcentaje de su barra de progreso: ')
    div2.style.backgroundColor = 'red';
    div2.style.width = `${porcentaje}%`;
    div2.style.height = '20px';

    div1.appendChild(div2);
    section2.appendChild(div1);

}


// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes
const div = document.createElement('div');
const h3 = document.createElement('h3');
const p = document.createElement('p');
h3.innerText = 'Esto es un articulo';
p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let iconos = ['<i class="fas fa-thumbs-up"></i>', '<i class="fas fa-heart"></i>', '<i class="fas fa-surprise"></i>'];

const crearSpan = () => {
    div.appendChild(h3);
    div.appendChild(p);
    div.style.fontFamily = 'Helvetica';
    for(icono of iconos){
        const spans = document.createElement('span');
        // const i = document.createElement('i');
        const cantidad = prompt('Cantidad por reacción');
        spans.innerHTML =  cantidad + icono;
        spans.style.marginLeft = '15px';
        spans.style.padding = '10px'
        spans.style.backgroundColor = '#ccc';
        spans.style.borderRadius = '5px';
        // spans.style.fontFamily = 'Fredoka One';
        div.appendChild(spans);
    }
}


postIconos.appendChild(div);