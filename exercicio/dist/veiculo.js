"use strict";
exports.__esModule = true;
exports.veiculo = void 0;
var veiculo = /** @class */ (function () {
    function veiculo() {
    }
    veiculo.prototype.acelerar = function (valor) {
        console.log("acelerando ".concat(valor, " Km/h..."));
    };
    veiculo.prototype.parar = function () {
        console.log("parando...");
    };
    return veiculo;
}());
exports.veiculo = veiculo;
