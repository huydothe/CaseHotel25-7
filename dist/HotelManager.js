"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelManager = void 0;
const Admin_1 = require("./Admin");
class HotelManager {
    constructor() {
        this.storage = [];
        this.store = [];
        this.Admin = [];
    }
    showAllCustomer() {
        return this.storage;
    }
    ;
    showGoodsInStore() {
        return this.store;
    }
    showAdmin() {
        return this.Admin;
    }
    creatGoods(goods) {
        this.store.push(goods);
    }
    creatNewCustomer(customer) {
        this.storage.push(customer);
    }
    ;
    creatAdmin(admin) {
        this.Admin.push(admin);
    }
    CreatAdminAccount(username, password) {
        let newAdmin = new Admin_1.Admin(username, password);
        this.Admin.push(newAdmin);
    }
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
    checkAdmin(username, password) {
        for (let i = 0; i < this.Admin.length; i++) {
            if (this.Admin[i].getUserName() === username && this.Admin[i].getPassword() === password) {
                return true;
            }
        }
        return false;
    }
}
exports.HotelManager = HotelManager;
