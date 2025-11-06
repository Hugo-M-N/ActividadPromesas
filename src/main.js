import { getPais } from "./services/getPaisService.js";
import { getRegión } from "./services/getRegionService.js";

const pais = document.getElementById("pais");
const region = document.getElementById("region");
const btn = document.getElementById("buscar");
const result = document.getElementById("result");


async function findPais(idPais, idRegion) {
    try {
        const pais = await getPais(idPais);
        if(Number.isInteger(idRegion)){
            const region = await getRegión(idPais, idRegion);
            result.textContent = `País: ${pais} - Región: ${region}`;
        } else {
            result.textContent = `País: ${pais}`;
        }
    } catch (error) {
        console.log(error, "ERROR");
        result.textContent = error;
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