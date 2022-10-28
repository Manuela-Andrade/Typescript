export class veiculo{

    cor: string;
    fabricante: string;
    modelo: string;

    acelerar(valor: number): void{
        console.log(`acelerando ${valor} Km/h...`)
    }
    parar(): void{
        console.log("parando...")
    }

}