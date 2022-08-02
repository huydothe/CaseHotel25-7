"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckValidate = void 0;
class CheckValidate {
    constructor() {
        this.ValidUsername = /^[A-Z]+[a-z|A-z|0-9]{5,15}@gmail.com$/;
    }
    isValidUsername(username) {
        return this.ValidUsername.test(username);
    }
}
exports.CheckValidate = CheckValidate;
