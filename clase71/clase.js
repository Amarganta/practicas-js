/*
const arreglo = [];

arreglo1['name'] = 'Ama';
arreglo2['lasrname'] = 'Gonzalez';
const personasEnArreglo = ['Banana', 'Manzana'];
personasEnArreglo.push(arreglo)
*/
// console.log(arreglo);


const objeto = {
     name: 'Ama',
    lastname: 'Gonzalez',
};
const objeto2= objeto;

const personas =  [];

personas.push(objeto);
personas.push(objeto);

console.log(personas);