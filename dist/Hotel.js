"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(dayOfRents, type, person) {
        this.dayOfRents = dayOfRents;
        this.type = type;
        this.person = person;
    }
    getDayOfRents() {
        return this.dayOfRents;
    }
    setDayOfRents(value) {
        this.dayOfRents = value;
    }
    getType() {
        return this.type;
    }
    setType(value) {
        this.type = value;
    }
    getPerson() {
        return this.person;
    }
    setPerson(value) {
        this.person = value;
    }
}
exports.Hotel = Hotel;
