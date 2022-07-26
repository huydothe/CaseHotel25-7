"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
class Food {
    constructor(name, amount, orderPrice) {
        this.name = name;
        this.amount = amount;
        this.orderPrice = orderPrice;
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
    getOrderPrice() {
        return this.orderPrice;
    }
    setOrderPrice(orderPrice) {
        this.orderPrice = orderPrice;
    }
}
exports.Food = Food;
