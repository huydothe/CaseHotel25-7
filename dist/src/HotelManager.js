"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
class HotelManager {
    constructor() {
        this.storage = [];
    }
    showAllCustomer() {
        return this.storage;
    }
    ;
    creatNewCustomer(customer) {
        this.storage.push(customer);
    }
    ;
    editGuestInfo(index, newCustomer) {
        this.storage[index] = newCustomer;
    }
    ;
    deleteGuestInfo(index) {
        this.storage.splice(index, 1);
    }
    ;
    searchGuestByName(name) {
        let newArr = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getPerson().getname() === name) {
                newArr.push(this.storage[i]);
            }
            else {
                return -1;
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
            else {
                return -1;
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
            else {
                return -1;
            }
        }
        return newArr;
    }
    guestOrder(foodName) {
        let orderFood = [];
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i].getFood().getName() === foodName) {
                orderFood.push(foodName);
            }
            else {
                return -1;
            }
        }
        return orderFood;
    }
}
exports.HotelManager = HotelManager;
