//uso da interpolação
var nome1 = 'Manuela';
console.log('O nome é ' + nome1);
console.log("o nome \u00E9 ".concat(nome1));
var titulos = function (vezes) {
    return vezes > 12;
};
var time = 'Flamengo';
var numeroDeTitulos = 4;
console.log("Ter ".concat(numeroDeTitulos, " titulos n\u00E3o \u00E9 suficiente para o ultrapassar o ").concat(time, " "));
console.log("Ter ".concat(numeroDeTitulos, " titulos n\u00E3o \u00E9 suficiente para o ultrapassar o ").concat(time, "? ").concat(titulos(numeroDeTitulos) ? 'SIM' : 'NÃO'));
//funcao para dividir dois numeros
// function dividir(n1:number,n2: number): number{
//return n1/n2;}
// console.log(`o resultado da divisao é ${dividir(5,2)}`);
