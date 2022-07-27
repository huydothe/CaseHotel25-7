import {Hotel} from "./Hotel";
import {Person} from "./Person";
import {Food} from "./Food";
import {Admin} from "./Admin";

export class HotelManager {
    storage: Hotel[] = [];
    store: Food[] = [];
    Admin: Admin[]=[];

    showAllCustomer() {
        return this.storage;
    };

    showGoodsInStore() {
        return this.store;
    }

    creatAdmin(admin:Admin){
        this.Admin.push(admin);
    }

    creatGoods(goods: Food) {
        this.store.push(goods);
    }

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

    editGuestNameInfo(ID: string, newName: string): void {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].getPerson().setname(newName);
            }
        }
    }

    editGuestDobInfo(ID: string, newDob: string): void {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].getPerson().setdob(newDob);
            }
        }
    }

    editDayOfRentInfo(ID: string, newDayOfRent: string): void {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].setDayOfRents(newDayOfRent);
            }
        }
    }

    editTypeInfo(ID: string, newType: string): void {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].setType(newType);
            }
        }
    }

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

    checkGuestOrderFood(nameGuest: string,ID:string, nameFood: string, amount: string) {
        let index = -1;
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getname() === nameGuest && this.storage[i].getPerson().getindentity() === ID) {
                for (let j = 0; j < this.store.length; j++) {
                    if (this.store[j].getName() === nameFood) {
                        if (+this.store[j].getAmount() >= +amount) {
                            this.storage[i].setStatus(true);
                            index = j+1;
                            return index;
                        }
                    }
                }
                index = -2;
            }
        }
        return index;
    }

    checkAdmin(username:string, password:string):boolean{
        for(let i=0; i<this.Admin.length; i++){
            if(this.Admin[i].getUserName()===username && this.Admin[i].getPassword()===password){
                return true;
            }
        }
        return false;
    }
}