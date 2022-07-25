import {Hotel} from "./Hotel";
import {Person} from "./Person";
import {Food} from "./Food";

export class HotelManager {
    private storage: Hotel[] = [];
    private store:Food[]=[];

    showAllCustomer() {
        return this.storage;
    };

    creatNewCustomer(customer: Hotel): void {
        this.storage.push(customer);
    };

    editGuestInfo(ID: string, newCustomer: Hotel): void {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i] = newCustomer;
            }
        }
    };

    deleteGuestInfo(ID: string): void {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage.splice(i, 1);
            }
        }
    };

    searchGuestByName(name: string) {
        let newArr: Hotel[] = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getname() === name) {
                newArr.push(this.storage[i]);
            }
        }
        return newArr;
    }

    searchGuestByDateOfBirth(dob: string) {
        let newArr: Hotel[] = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getdob() === dob) {
                newArr.push(this.storage[i]);
            }
        }
        return newArr;
    }

    searchGuestByIdentity(ID: string) {
        let newArr: Hotel[] = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                newArr.push(this.storage[i]);
            }
        }
        return newArr;
    }
    orderFood(name:string,amount:string){
        for(let i = 0; i<this.store.length; i++){
            if(this.store[i].getName()===name){

            }
        }
    }
}