/*function qualNome(nome: String): void{
    console.log('Você passou o nome ' + nome);
}

function somar(n1, n2: number): number{
    return (n1 + n2);

}
//Função sem declarar nome a function
let numeroMaior = function(valor:number): boolean {
    return valor > 10;
}

//Função com parâmetro opcional
function exibir(nome: string, idade?: number): void{
    let i = idade || 0;

    console.log('o nome é ' + nome + ' e a idade é ' + i);
}

//Arrow Function
let multiplicar = (n1:number, n2: number) => {
    return n1 * n2;
}

let nascimento = (nome: string, ano: number) => {
    let idade = 2022 - ano;
    console.log("O nome é " + nome + '. E a idade é ' + idade);


}
//Array
let numeros: Array<number> = [5, 1, 12, 20];
function listar(x: Array<number>): void{
     for(let i = 0; i < x.length; i++){
        console.log(x[i]);
     }
}

qualNome("Manuela");

console.log(somar(4,8));

console.log(numeroMaior(12));

exibir('Joaquim');

console.log(multiplicar(10,5));

nascimento('Manuela', 2003);

console.log(numeros);
listar(numeros);

numeros.forEach((x) => {
    console.log('Valor Original: ' + x);
    console.log('Valor Alterado: ' + (x * 5));
});

console.log('Numeros antes da ordenação: ' );
console.log(numeros);
numeros.sort();
console.log('Numeros depois da ordenação: ' );
console.log(numeros)

function maior(n1: number, n2: number): number{
    let resultado = n1 - n2;
    return resultado;

}
console.log(maior(1,5));

numeros.sort((n1, n2: number) => {
    return n1-n2;

});

console.log('Numeros ordenados (ordem correta): ');
console.log(numeros); */