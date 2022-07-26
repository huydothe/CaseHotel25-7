import {Person} from "./Person";

export class Food {
    private name: string;
    private amount: string;
    private orderPrice:number;

    constructor(name: string, amount: string, orderPrice:number) {
        this.name = name;
        this.amount = amount;
        this.orderPrice=orderPrice;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getAmount() {
        return this.amount;
    }

    setAmount(amount: string) {
        this.amount = amount;
    }

    getOrderPrice(){
        return this.orderPrice;
    }

    setOrderPrice(orderPrice:number){
        this.orderPrice=orderPrice;
    }
}