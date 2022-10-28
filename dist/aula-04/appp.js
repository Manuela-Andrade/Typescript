var Cor;
(function (Cor) {
    Cor[Cor["vermelho"] = 0] = "vermelho";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["verde"] = 2] = "verde";
})(Cor || (Cor = {}));
var cor = 'vermelho';
if (cor == 'verde') {
    console.log('siga! Acerele');
}
else {
    console.log('Pane!');
}
console.log('Valor do enum:');
console.log(Cor.verde);
var corDoEnum;
corDoEnum = Cor.verde;
console.log('Variável do tipo enum : ');
console.log(corDoEnum);
console.log(Cor[1]);
if (cor == Cor[2]) {
    console.log('siga! Acerele');
}
else {
    console.log('Pane!');
}
