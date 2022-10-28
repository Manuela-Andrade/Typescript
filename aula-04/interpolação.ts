//uso da interpolação

let nome1: string = 'Manuela';

console.log('O nome é ' + nome1);
console.log(`o nome é ${nome1}`);

let titulos = function(vezes: number): boolean{
    return vezes > 12;
}

let time = 'Flamengo';
let numeroDeTitulos = 4;





console.log(`Ter ${numeroDeTitulos} titulos não é suficiente para o ultrapassar o ${time} `);

console.log(`Ter ${numeroDeTitulos} titulos não é suficiente para o ultrapassar o ${time}? ${titulos(numeroDeTitulos)? 'SIM' : 'NÃO'}`);


//funcao para dividir dois numeros

// function dividir(n1:number,n2: number): number{
    //return n1/n2;}
// console.log(`o resultado da divisao é ${dividir(5,2)}`);

