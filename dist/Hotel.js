"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hotel = void 0;
class Hotel {
    constructor(dayOfRents, type, price, person, status_OrderFood = false) {
        this.status_OrderFood = false;
        this.dayOfRents = dayOfRents;
        this.type = type;
        this.price = price;
        this.person = person;
        this.status_OrderFood = status_OrderFood;
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
    setPrice(price) {
        this.price = price;
    }
    getPerson() {
        return this.person;
    }
    setPerson(value) {
        this.person = value;
    }
    getStatus() {
        return this.status_OrderFood;
    }
    setStatus(status) {
        this.status_OrderFood = status;
    }
}
exports.Hotel = Hotel;
