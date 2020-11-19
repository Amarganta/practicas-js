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

    for(let i = 0; i < colores.length; i++){
        let colorR = window.prompt('Ingrese el color en RGB');
        let colorG = window.prompt('color 2');
        let colorB = window.prompt('color 3');
    }
    document.body.style.backgroundColor = colorR + colorG + colorB;
}
