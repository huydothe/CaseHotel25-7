"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}
exports.Food = Food;
