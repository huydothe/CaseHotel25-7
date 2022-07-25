import {Person} from "./Person";
import {Food} from "./Food";

export class Hotel {
    private dayOfRents: string;
    private type: string;
    private person: Person;

    constructor(dayOfRents: string, type: string, person: Person) {
        this.dayOfRents = dayOfRents;
        this.type = type;
        this.person = person;
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

    getPerson(): Person {
        return this.person;
    }

    setPerson(value: Person) {
        this.person = value;
    }


}