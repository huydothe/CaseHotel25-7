"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(dayOfRents, type, price, person, food) {
        this.dayOfRents = dayOfRents;
        this.type = type;
        this.price = price;
        this.person = person;
        this.food = food;
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
    getPrice() {
        return this.price;
    }
    setPrice(value) {
        this.price = value;
    }
    getPerson() {
        return this.person;
    }
    setPerson(value) {
        this.person = value;
    }
    getFood() {
        return this.food;
    }
    setFood(value) {
        this.food = value;
    }
}
exports.Hotel = Hotel;
