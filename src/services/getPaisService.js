import { paises } from "../../public/data/info.js";

export async function getPais(id){
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const pais = paises.find( e => e.id === id)?.nombre

            if(pais) {
                resolve(pais);
            } else {
                reject(`El país con id ${id} no existe`)
            }
        }, 800);
    });
    return promesa;
}