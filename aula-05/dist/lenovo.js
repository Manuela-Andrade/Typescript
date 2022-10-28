"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.LeNovo = void 0;
var laptop_1 = require("./laptop");
var LeNovo = /** @class */ (function (_super) {
    __extends(LeNovo, _super);
    function LeNovo() {
        return _super.call(this, 12) || this;
    }
    LeNovo.prototype.aumentarBrilho = function (valor) {
        console.log("Aumentou o brilho em ".concat(valor, " pontos."));
    };
    return LeNovo;
}(laptop_1.LapTop));
exports.LeNovo = LeNovo;
