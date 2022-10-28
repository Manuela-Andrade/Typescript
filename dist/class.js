var LapTop = /** @class */ (function () {
    function LapTop(tela) {
        this.tela = tela;
    }
    LapTop.prototype.ligarMonitor = function () {
        console.log('o monitor foi ligado');
    };
    return LapTop;
}());
var computador;
var outro;
computador = new LapTop(14);
outro = new LapTop(21);
computador.ligarMonitor();
console.log("o tamanha da tela \u00E9 de ".concat(computador.tela, " polegadas"));
console.log("o tamanha da tela \u00E9 de ".concat(outro.tela, " polegadas"));
