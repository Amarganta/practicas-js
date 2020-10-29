// Crear una función puedeAvanzar que tome como argumento un string con el color 
//del semáforo y devuelva true si puede avanzar o false si no. 
//Si no se ingresa un color válido, debe devolver un string que diga: 
//Error: color de semáforo inválido

const puedeAvanzar = (color) => {
    switch(color){
        case 'rojo':
            return false;
        case 'amarillo':
            return false;
        case 'verde': 
            return true;
        default:
          return 'Error: color de semáforo inválido'
    } 
    
}
console.log(puedeAvanzar('verde'))