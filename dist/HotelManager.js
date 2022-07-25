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
    orderFood(name, amount) {
        for (let i = 0; i < this.store.length; i++) {
            if (this.store[i].getName() === name) {
            }
        }
    }
}
exports.HotelManager = HotelManager;
