import { getPais } from "./services/getPaisService.js";
import { getRegión } from "./services/getRegionService.js";

const pais = document.getElementById("pais");
const region = document.getElementById("region");
const btn = document.getElementById("buscar");
const result = document.getElementById("result");


function findPais(idPais, idRegion) {
    getPais(idPais)
        .then((pais) => {result.textContent = `País: ${pais}`;})
        .catch((error) => {result.textContent = error;});
    if(Number.isInteger(idRegion)){
        getRegión(idPais, idRegion)
            .then((region) => {result.textContent += ` - Región: ${region}`})
            .catch((error) => {result.textContent = error});
    }
}

btn.addEventListener("click", () => {
    const idPais = parseInt(pais.value);
    const idRegion = parseInt(region.value);

    try {
        findPais(idPais, idRegion);
    } catch (error) {
        result.textContent = error.message;
    }
});