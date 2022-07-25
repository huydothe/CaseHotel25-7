"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
}
exports.Food = Food;
