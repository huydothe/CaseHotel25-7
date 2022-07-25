export class Food {
    private name: string;
    private amount:string;

    constructor(name: string, amount:string) {
        this.name = name;
        this.amount=amount;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getAmount(){
        return this.amount;
    }

    setAmount(amount: string){
        this.amount=amount;
    }
}