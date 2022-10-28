import { caminhao } from "./caminhao";
import { moto } from "./moto";


let caminhao1: caminhao;
let Moto1: moto;

caminhao1 = new caminhao();
Moto1 = new moto(); 

caminhao1.cor = 'vermelho';
caminhao1.modelo = 'Carga XT';
caminhao1.fabricante = 'Volvo';

Moto1.cor = 'verde';
Moto1.modelo = 'AZ 400';
Moto1.fabricante = 'kawasaki';

console.log(`A moto ${Moto1.modelo} está`);
Moto1.acelerar(80);

console.log(`O caminhão ${caminhao1.modelo} está`);
caminhao1.descarregar();


   