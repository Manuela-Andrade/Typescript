/* exercicio para definir se um nummero é par ou impar,
utilizando  interpolação e opoerado ternário
*/
function avaliarNumero(x) {
    return (x % 2 == 0);
}
//let numero = 10; //OPERADO TERNARIO ?????
console.log("o numero \u00E9 ".concat(avaliarNumero(10) ? 'PAR' : 'IMPRAR'));
