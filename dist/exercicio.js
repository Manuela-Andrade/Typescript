//funcao utilizando valor padrao
function calcularSalario(salario, aumento) {
    if (aumento === void 0) { aumento = 5; }
    return (((salario * aumento / 100) + salario));
}
console.log("seu novo salario \u00E9 ".concat(calcularSalario(1000)));
//funcao com opcional 
function calcularSalario1(salario1, aumento1) {
    var x = aumento1 || 5;
    return (((salario1 * x / 100) + salario1));
}
console.log("seu novo salario \u00E9 ".concat(calcularSalario(1000)));
