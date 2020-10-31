// Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos,
// pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva true si una persona
// está habilitada para renovar su carnet de conducir o false si no. Una persona
// puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó 
//todos los impuestos

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if((pasoTests == true) && (tieneMultasImpagas == false) && (pagoImpuestos == true)){
        return true
    }  
    return false
}
console.log(puedeRenovarCarnet(true, false, true))   
