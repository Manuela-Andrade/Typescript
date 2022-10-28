"use strict";
exports.__esModule = true;
exports.LapTop = void 0;
var LapTop = /** @class */ (function () {
    function LapTop(tela) {
        this.tela = tela;
    }
    LapTop.prototype.ligarMonitor = function () {
        console.log('o monitor foi ligado');
    };
    return LapTop;
}());
exports.LapTop = LapTop;
