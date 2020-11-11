// CONTINUACIÓN EJERCICIOS OBJETOS clase 72

const personajes = getInhabitants();
// 1 Mostrar en pantalla al/los personajes mas pequeños de "Brastlewark"

const personajesMasPequenios = () => {

    let menor = personajes[0];
    
    for(let i = 0; i < personajes.length - 1; i++) {
      // const p1 = personajes[i].height;
      const p2 = personajes[i+1]
      
      if(menor.height > p2.height){
        menor = p2
      }
    }
    return menor;
  }
  
  let  masBajo = personajesMasPequenios();

//   console.log(masBajo);

//FUNCIONES PARA EL EJERCICIO 5
//mas alto

const personajeMas = (key,esMayor = true) =>{
    let mayor = personajes[0];
    
    for(let i = 1; i < personajes.length - 1; i++) {
      const p2 = personajes[i];

      if(esMayor && mayor[key] < p2[key]){
        mayor = p2 ;
      }else if(!esMayor && mayor[key] > p2[key]){
        mayor = p2 ;
      }
    }
    return mayor;
}

  const personajeMasAlto = () => {

    let mayor = personajes[0];
    
    for(let i = 0; i < personajes.length - 1; i++) {
      // const p1 = personajes[i].height;
      const p2 = personajes[i+1]
      
      if(mayor.height < p2.height){
        mayor = p2
      }
    }
    return mayor;
  }
 let masAlto = personajeMasAlto();
// console.log(masAlto)


//mas anciano
const personajeMasAnciano = () => {

    let anciano = personajes[0];
    
    for(let i = 0; i < personajes.length - 1; i++) {
      // const p1 = personajes[i].height;
      const p2 = personajes[i+1]
      
      if(anciano.age < p2.age){
        anciano = p2
      }
    }
    return anciano;
  }
  let masAnciano = personajeMasAnciano();
//   console.log(masAnciano);

//mas joven
const personajeMasJoven = () => {

    let joven = personajes[0];
    
    for(let i = 0; i < personajes.length - 1; i++) {
      // const p1 = personajes[i].height;
      const p2 = personajes[i+1]
      
      if(joven.age > p2.age){
        joven = p2
      }
    }
    return joven;
  }
let masJoven = personajeMasJoven();
// console.log(masJoven);

//mas ancho
const personajeMasAncho = () => {

    let ancho = personajes[0];
    
    for(let i = 0; i < personajes.length - 1; i++) {
      // const p1 = personajes[i].height;
      const p2 = personajes[i+1]
      
      if(ancho.weight < p2.weight){
        ancho = p2
      }
    }
    return ancho;
  }
let masAncho = personajeMasAncho();
// console.log(masAncho)

// 5 Crear una funcion que devuelva al mas alto, al mas bajo, al mas anciano, al mas joven o al mas ancho
//  de "Brastlewark".

const personajesMas = (value) => {
    let retorno = {}
    switch(value){
        case 'alto':
        retorno = personajeMas("heigth");
            break
        case 'bajo':
            retorno = personajeMas("heigth",false);
            break;
        case 'anciano':
            retorno= personajeMas("age");
            break
        case 'joven':
            retorno= personajeMas("age",false);
            break
        case 'ancho':
            retorno=personajeMas("weigth");
            break
        case 'delgado':
            retorno=personajeMas("weigth",false);
            break
    }
    return retorno;
}


  //  console.log(personajesMas('joven'))

// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.
/*

*/
const dinamico = (key, value)=>{
    const lista = [];
    for(const personaje of personajes){
      if(personaje[key] === value){
        lista.push(personaje);
      }
    }
    return lista
  }

/*
1-> buscar Fiz -> traer un array de objetos
2-> extrear amigos de fiz
3-> recorrer lo amigo de fiz
4-> Lo agrego a un array   
  
*/
const buscandoAFizwood = () =>{
    /*
    [{name:'Fiz',age:123,friends:["pepito","Flor"]}]
    */
    const personajes =  dinamico("name",'Fizwood Mysttink');
    const amigos = personajes[0].friends
    for(let i = 0; i < amigos.length; i++){
        personajes.push(dinamico('name', amigos[i])[0])
    }
    // console.table(personajes);
}


buscandoAFizwood();


// Listar a todos los personajes que tengan como profesión "Woodcarver".
// 1.recorrer el array buscando professions
// 1.1 si coincide con el parametro lo guardo en el array
// 2.mostrar el resultado en una lista
const profesion = ()=>{
    const lista = [];
    for(personaje of personajes){
        if(personaje.professions.includes('Woodcarver')){
            lista.push(personaje);
        }
    }
    // console.log(lista);
}
// profesion();

// Listar a todos los personajes que tengan como profesion un dato enviado como parámetro.
// 1. crear una funcion con un parametro 'profesion'
// 2. 

const profesion2 = (profesion) =>{
    const lista = [];
    for(personaje of personajes){
        if(personaje.professions.includes(profesion)){
            lista.push(personaje);
        }
    }
    // console.log(lista);
}
// profesion2("Woodcarver");

// Crear una función que devuelva un objeto con una propiedad con todas las profesiones que se
//  desarrollan en "Brastlewark" y otra con la cantidad de profesiones encontradas.
/*
{
    profesion: ["Woodcarver","Stonecarver"],
    cantidad: 2
}

*crear objeto vacio
*recorrer cada personaje 
*recorrer la propiedad profesion
 * hay agregarlo solo cuando es nueva
 * Y contar la cantidad de la nuevas
*imprimo el objeto
*/

const todasLasProfesiones = ()=>{
    const trabajos = {profesion:[]}//objeto con la propiedad profesion que es un array vacio
    for(let personaje of personajes){
        for(let profesion of personaje.professions){
            if(!trabajos.profesion.includes(profesion) ){
                trabajos.profesion.push(profesion)
            }
        }
    }
    console.log(trabajos);
}

todasLasProfesiones();
