"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    getUserName() {
        return this.username;
    }
    setUserName(username) {
        this.username = username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
}
exports.Admin = Admin;
