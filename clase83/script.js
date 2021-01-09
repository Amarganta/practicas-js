// fetch

// REST API

// Endpoints

// Recursos

// path params

// metodos HTTP

// GET 

// Query params
/**
 
 */

const base = "https://api.themoviedb.org/3/";
const apiKey = "0bce2b3619ac231ad6ce364b6d8015ab"

fetch(base + 'movie/top_rated?api_key=0bce2b3619ac231ad6ce364b6d8015ab')
    .then((response) => {
        console.log(response);
    });
