export class Person {
    private name: string;
    private dob: string;
    private identity: string;

    constructor(name: string, dob: string, identity: string) {
        this.name = name;
        this.dob = dob;
        this.identity = identity;
    }

    getname(): string {
        return this.name;
    }

    setname(value: string) {
        this.name = value;
    }

    getdob(): string {
        return this.dob;
    }

    setdob(value: string) {
        this.dob = value;
    }

    getindentity(): string {
        return this.identity;
    }

    setindentity(value: string) {
        this.identity = value;
    }
}