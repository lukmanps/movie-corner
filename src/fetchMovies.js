import { API } from "./App"

export const fetchMovies = () => {
    return new Promise((resolve, reject) => {
        fetch(API)
        .then((response) =>{ 
            resolve(response.json());
        })
        .catch((err) => {
            reject(err);
        })
    })
}