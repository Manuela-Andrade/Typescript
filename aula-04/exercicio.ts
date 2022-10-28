//funcao utilizando valor padrao
function calcularSalario(salario: number, aumento: number= 5){

    return(((salario * aumento / 100)+ salario));
}

console.log(`seu novo salario é ${calcularSalario(1000, )}`);


//funcao com opcional 
function calcularSalario1(salario1: number, aumento1?: number):number{
let x =aumento1 || 5;
    return(((salario1 * x / 100)+ salario1));
}

console.log(`seu novo salario é ${calcularSalario(1000 )}`);
