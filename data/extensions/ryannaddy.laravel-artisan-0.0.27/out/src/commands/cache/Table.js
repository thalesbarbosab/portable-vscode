"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Common_1 = require("../../Common");
class CacheTable extends Common_1.default {
    static run() {
        return __awaiter(this, void 0, void 0, function* () {
            let command = `cache:table`;
            this.execCmd(command, (info) => __awaiter(this, void 0, void 0, function* () {
                if (info.err) {
                    this.showError('A migration table could not be created for the cache database table', info.err);
                }
                else {
                    this.showMessage('A migration table was created for the cache database table');
                }
            }));
        });
    }
}
exports.default = CacheTable;
//# sourceMappingURL=Table.js.map