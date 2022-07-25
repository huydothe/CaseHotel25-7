"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, dob, identity) {
        this.name = name;
        this.dob = dob;
        this.identity = identity;
    }
    getname() {
        return this.name;
    }
    setname(value) {
        this.name = value;
    }
    getdob() {
        return this.dob;
    }
    setdob(value) {
        this.dob = value;
    }
    getindentity() {
        return this.identity;
    }
    setindentity(value) {
        this.identity = value;
    }
}
exports.Person = Person;
