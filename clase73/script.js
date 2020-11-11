//Ejercicios de la clase de 72
//aplicando destructuración

const personajes = getInhabitants();
// 1 Mostrar en pantalla al/los personajes mas pequeños de "Brastlewark"

// {
//     id: 0,
//     name: "Tobus Quickwhistle",
//     thumbnail:
//       "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
//     age: 306,
//     weight: 39.065952,
//     height: 107.75835,
//     hair_color: "Pink",
//     professions: [
//       "Metalworker",
//       "Woodcarver",
//       "Stonecarver",
//       "Tinker",
//       "Tailor",
//       "Potter",
//     ],
//     friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
// }

const personajesMasPequenios = () => {

    let menor  = personajes[0];
    
    for(let i = 0; i < personajes.length - 1; i++) {

      const { height } = personajes[i+1]
      
      if(menor.height > height){
        menor = personajes[i+1]
      }
    }
    return menor;
  }
  
  let  masBajo = personajesMasPequenios();

//    console.log(masBajo);

   
// 3 Crear una funcion que devuelva una lista de los habitantes de "Brastlewark" por el color de pelo.

const colorCabello = (color) =>{
    let array = [];
    for(let personaje of personajes){
        const {hair_color} = personaje;
        if(hair_color === color){
            array.push(personaje);
        }
    }
    return array;
}
//   console.table(colorCabello('Pink'));


// 6 Mostrar una tabla con "Fizwood Mysttink" y todos sus amigos.

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
    for(let i = 0; i < friends.length; i++){
        personajes.push(dinamico('name', amigos[i])[0])
    }
    console.table(personajes);
}


buscandoAFizwood();