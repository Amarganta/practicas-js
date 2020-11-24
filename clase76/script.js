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