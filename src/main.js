import { getPais } from "./services/getPaisService.js";
import { getRegión } from "./services/getRegionService.js";

const pais = document.getElementById("pais");
const region = document.getElementById("region");
const btn = document.getElementById("buscar");
const result = document.getElementById("result");


function findPais(idPais, idRegion){

}

btn.addEventListener("click", () => {
    const idPais = pais.value;
    const idRegion = region.value;

    try {
        findPais(idPais,idRegion);
    } catch (error) {
        result.textContent = error.message;
    }
});