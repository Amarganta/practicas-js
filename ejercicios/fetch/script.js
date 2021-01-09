 const base = "https://api.themoviedb.org/3/";
 const baseImg = "https://image.tmdb.org/t/p/w500/";
 const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab";

//  fetch(`url`)
//      .then(response => {
//          return response.json();
//      })
//     .then(data => {
//         console.log(data);
//      });

miObjeto = {
    id: 0,
    name: "Tobus Quickwhistle", 
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    img: 'https://minilatam.com/blog/wp-content/uploads/2019/04/MINI-de-las-25-mejores-playas-del-mundo-8-estan-en-Latinoamerica-y-el-Caribe-0.png',
}

miTabla = document.createElement('table');
miTabla.setAttribute('border', 1);

document.body.appendChild(miTabla);

// Crear una función renderTableHead que reciba una tabla y un objeto y en bases a sus prop, renderice la cabecera de una 
//tabla en pantalla.

const renderTableHead = (param1, param2) => {
    thead = document.createElement('thead');
    for(prop in param2) {
        th = document.createElement('th');
        th.innerHTML = prop;
        thead.appendChild(th);
    }
    param1.appendChild(thead);
}

renderTableHead(miTabla, miObjeto);


// Crear una función renderImage que renderice una imagen en pantalla.
const renderImage = (param1, param2) => {
    const image = document.createElement('img');
    image.src = param2;
    param1.appendChild(image);
}

const div = document.createElement('div');
document.body.appendChild(div);
renderImage(div, miObjeto.img);

// Crear una función renderTableData que reciba un tbody y un objeto y renderice una fila de tabla en pantalla.
const renderTableRow = (param1, param2) =>{
    const tr = document.createElement('tr');
    for(prop in param2){
        td = document.createElement('td');
        td.innerHTML = param2[prop];
        tr.appendChild(td);
    }
    param1.appendChild(tr);
}

tbody = document.createElement('tbody'); // borrar luego
miTabla.appendChild(tbody); // borrar luego
renderTableRow(tbody, miObjeto);

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre los generos disponibles.

// Haciendo uso de las funciones anteriores, crear una tabla en pantalla que muestre las peliculas mas populares.

// Paginar donde sea necesario.