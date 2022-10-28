import { LapTop } from "./laptop";

export class LeNovo extends LapTop{

    constructor(){
        super(12);
    }

    aumentarBrilho(valor: number){
        console.log(`Aumentou o brilho em ${valor} pontos.`)
    }

}

