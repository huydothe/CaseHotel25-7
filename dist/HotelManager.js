"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
class HotelManager {
    constructor() {
        this.storage = [];
        this.store = [];
    }
    showAllCustomer() {
        return this.storage;
    }
    ;
    showGoodsInStore() {
        return this.store;
    }
    creatGoods(goods) {
        this.store.push(goods);
    }
    creatNewCustomer(customer) {
        this.storage.push(customer);
    }
    ;
    editGuestInfo(ID, newCustomer) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i] = newCustomer;
            }
        }
    }
    ;
    editGuestNameInfo(ID, newName) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].getPerson().setname(newName);
            }
        }
    }
    editGuestDobInfo(ID, newDob) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].getPerson().setdob(newDob);
            }
        }
    }
    editDayOfRentInfo(ID, newDayOfRent) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].setDayOfRents(newDayOfRent);
            }
        }
    }
    editTypeInfo(ID, newType) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage[i].setType(newType);
            }
        }
    }
    deleteGuestInfo(ID) {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                this.storage.splice(i, 1);
            }
        }
    }
    ;
    searchGuestByName(name) {
        let newArr = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getname() === name) {
                newArr.push(this.storage[i]);
            }
        }
        return newArr;
    }
    searchGuestByDateOfBirth(dob) {
        let newArr = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getdob() === dob) {
                newArr.push(this.storage[i]);
            }
        }
        return newArr;
    }
    searchGuestByIdentity(ID) {
        let newArr = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getindentity() === ID) {
                newArr.push(this.storage[i]);
            }
        }
        return newArr;
    }
    checkGuestOrderFood(nameGuest, ID, nameFood, amount) {
        let index = -1;
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getname() === nameGuest && this.storage[i].getPerson().getindentity() === ID) {
                for (let j = 0; j < this.store.length; j++) {
                    if (this.store[j].getName() === nameFood) {
                        if (+this.store[j].getAmount() >= +amount) {
                            this.storage[i].setStatus(true);
                            index = j + 1;
                            return index;
                        }
                    }
                }
                index = -2;
            }
        }
        return index;
    }
}
exports.HotelManager = HotelManager;
