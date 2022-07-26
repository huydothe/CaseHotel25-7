import {Person} from "./Person";
import {Food} from "./Food";

export class Hotel {
    private dayOfRents: string;
    private type: string;
    private price:number;
    private person: Person;
    private status_OrderFood: boolean=false;

    constructor(dayOfRents: string, type: string, price: number, person: Person, status_OrderFood:boolean=false) {
        this.dayOfRents = dayOfRents;
        this.type = type;
        this.price=price;
        this.person = person;
        this.status_OrderFood=status_OrderFood;
    }

    getDayOfRents(): string {
        return this.dayOfRents;
    }

    setDayOfRents(value: string) {
        this.dayOfRents = value;
    }

    getType(): string {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price:number){
        this.price=price;
    }

    getPerson(): Person {
        return this.person;
    }

    setPerson(value: Person) {
        this.person = value;
    }

    getStatus(){
        return this.status_OrderFood;
    }

    setStatus(status:boolean){
      this.status_OrderFood=status;
    }
}