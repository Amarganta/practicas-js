// Crear una función obtenerGeneracion que tome como argumento un 
//número anioNacimiento y devuelva un string con la generación a la
// que pertenece, siguientdo estas reglas:
// Baby boomer	    => 1949-1968
// Generación X	    => 969-1980
// Millennials	    => 1981-1993
// Generación Z	    => 1994-2010

const obtenerGeneracion = (anioNacimiento) =>{
    if((anioNacimiento >= 1949) && (anioNacimiento <=1968)){
        return 'Baby boomer'
    } if ((anioNacimiento >= 1969) && (anioNacimiento <= 1980)){
        return 'Generación X'
    } if((anioNacimiento >= 1981) && (anioNacimiento <= 1993)){
        return 'Millennials'
    } if((anioNacimiento >= 1994) && (anioNacimiento <=2010)){
        return 'Generación Z'
    } else{
        return 'Generación sin definir'
    }
} 