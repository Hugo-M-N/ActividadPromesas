import { paises } from "../../public/data/info.js";

export async function getRegión(idPais, idRegion){
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() =>{
            const regiones = paises.find( e => e.id === idPais)?.regiones
            const region = regiones.find( e => e.id === idRegion)?.nombre

            if(region) {
                resolve(region);
            } else {
                reject(`La región con id ${idRegion} no existe`)
            }
        }, 800);
    });
    return promesa;
}