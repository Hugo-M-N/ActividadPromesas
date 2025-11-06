import { getPais } from "./services/getPaisService.js";
import { getRegión } from "./services/getRegionService.js";

const pais = document.getElementById("pais");
const region = document.getElementById("region");
const btn = document.getElementById("buscar");
const result = document.getElementById("result");


function findPais(idPais, idRegion){
    Promise.all([getPais(idPais), getRegión(idPais,idRegion)])
    .then(([pais, region]) => {result.textContent = `Pais: ${pais} - Región: ${region}`;})
    .catch((err) => {result.textContent = err});
}

btn.addEventListener("click", () => {
    const idPais = parseInt(pais.value);
    const idRegion = parseInt(region.value);

    try {
        findPais(idPais,idRegion);
    } catch (error) {
        result.textContent = error.message;
    }
});