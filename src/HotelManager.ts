import {Hotel} from "./Hotel";
import {Person} from "./Person";
import {Food} from "./Food";

export class HotelManager {
    storage: Hotel[] = [];
     store: Food[] = [];

    showAllCustomer() {
        return this.storage;
    };

    showGoodsInStore(){
        return this.store;
    }

    creatGoods(goods:Food){
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

    checkGuestOrderFood(nameGuest:string,nameFood:string,amount:string){
        let index = -1;
        for(let i=0; i<this.storage.length; i++){
            if(this.storage[i].getPerson().getname()===nameGuest){
                for (let j = 0; j < this.store.length; j++) {
                    if (this.store[j].getName() === nameFood) {
                        if (+this.store[j].getAmount() >= +amount) {
                            this.storage[i].setStatus(true);
                            index = j;
                            return index;
                        }
                    }
                }
                index = -2;
            }
        }
        return index;
    }

    // totalOrder(nameGuest: string, nameFood: string) {
    //         let totalOrder = 0;
    //         for (let i = 0; i < this.showAllCustomer().length; i++) {
    //             if (this.showAllCustomer()[i].getPerson().getname() === nameGuest) {
    //                 for (let j = 0; j < this.showGoodsInStore().length; j++) {
    //                     if (this.showGoodsInStore()[j].getName() === nameFood) {
    //                         totalOrder += +this.showGoodsInStore()[j].getAmount()*this.showGoodsInStore()[j].getOrderPrice();
    //                     }
    //                 }
    //             }
    //         }
    //         return totalOrder;
    //     }
}