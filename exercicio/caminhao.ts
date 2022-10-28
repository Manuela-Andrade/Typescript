import { veiculo } from "./veiculo";

export class caminhao extends veiculo{
    tamanhoCacanba: number;

    descarregar(): void{
        console.log("fazendo a descarga")
    }
}
