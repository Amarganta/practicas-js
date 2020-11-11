// Crear una función invertirCaso que tome como argumento un 
//string string y devuelva un string donde cada letra tiene el
//caso invertido, es decir, cada letra está mayúscula si estaba
// en minúscula, y viceversa.

const string = 'javascript'
const invertirCaso = (string) => {
    for(i=0; i< string.length; i++) {
        let caracter = string.charAt(i);

        if(caracter === caracter.toLowerCase()){
            console.log('caracter' + caracter + 'es lower case')
            nuevoCaracter = caracter.toUpperCase();
            string = string.replace(string.charAt(i), nuevoCaracter);
        } else if (caracter === caracter.toUpperCase()){
            nuevoCaracter = caracter.toLowerCase();
            string = string.replace(string.charAt(i), nuevoCaracter);
        }
    }
    return string;
}
console.log(invertirCaso(string))