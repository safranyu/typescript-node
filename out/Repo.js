"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo(repos) {
        this.name = repos.name;
        this.size = repos.size;
        this.language = repos.language;
        this.description = repos.description;
    }
    return Repo;
}());
exports.Repo = Repo;
