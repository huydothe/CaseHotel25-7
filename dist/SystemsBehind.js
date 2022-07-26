"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemsBehind = void 0;
const HotelManager_1 = require("./HotelManager");
const rl = __importStar(require("readline-sync"));
const Person_1 = require("./Person");
const Hotel_1 = require("./Hotel");
const Food_1 = require("./Food");
class SystemsBehind {
    constructor() {
        this.hotelManager = new HotelManager_1.HotelManager();
        this.listOrder = [];
    }
    initGuest() {
        let Huy = new Person_1.Person("Huy", "11/06/1999", "110699");
        let Nam = new Person_1.Person("Nam", "22/07/1989", "22071989");
        let An = new Person_1.Person("An", "05/05/2002", "05052002");
        let Do = new Person_1.Person("Do", "01/06/1994", "01061994");
        let HuyOrder = new Hotel_1.Hotel("12", "King", Huy);
        let NamOrder = new Hotel_1.Hotel("10", "Normal", Nam);
        let AnOrder = new Hotel_1.Hotel("3", "King", An);
        let DoOrder = new Hotel_1.Hotel("8", "Normal", Do);
        this.hotelManager.creatNewCustomer(HuyOrder);
        this.hotelManager.creatNewCustomer(NamOrder);
        this.hotelManager.creatNewCustomer(AnOrder);
        this.hotelManager.creatNewCustomer(DoOrder);
    }
    initGoods() {
        let Cocacola = new Food_1.Food("Cocacola", "1000");
        let Pepsi = new Food_1.Food("Pepsi", "1000");
        let Chip = new Food_1.Food("Chip", "500");
        let SweetCake = new Food_1.Food("SweetCake", "200");
        this.hotelManager.creatGoods(Cocacola);
        this.hotelManager.creatGoods(Pepsi);
        this.hotelManager.creatGoods(Chip);
        this.hotelManager.creatGoods(SweetCake);
    }
    inputGuestInfo() {
        let name = rl.question("What is Guest's name? ");
        let dob = rl.question("What is your Date of Birth? ");
        let identity = rl.question("What is your Identity? ");
        return new Person_1.Person(name, dob, identity);
    }
    ;
    inputGuestRoom() {
        let guest = this.inputGuestInfo();
        let dayOfRent = rl.question("How long do you want to rent? ");
        let type = rl.question("What kind of room do you want to rent? ");
        return new Hotel_1.Hotel(dayOfRent, type, guest);
    }
    ;
    showList() {
        console.log("--- Guest List ---");
        let guest = this.hotelManager.showAllCustomer();
        let data;
        let container = [];
        for (let i = 0; i < guest.length; i++) {
            data = {
                Name_Customer: guest[i].getPerson().getname(),
                Date_of_birth: guest[i].getPerson().getdob(),
                Identity: guest[i].getPerson().getindentity(),
                Days_of_rent: guest[i].getDayOfRents(),
                Room_type: guest[i].getType(),
                Status_Order_Food: guest[i].getStatus(),
            };
            container.push(data);
        }
        console.table(container);
    }
    ;
    creat() {
        console.log("--- Creat new customer's Info ---");
        let newCustomer = this.inputGuestRoom();
        this.hotelManager.creatNewCustomer(newCustomer);
    }
    ;
    edit() {
        console.log("--- Edit Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated ");
        let guest = this.inputGuestRoom();
        this.hotelManager.editGuestInfo(ID, guest);
    }
    ;
    delete() {
        console.log("--- Delete a Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated ");
        this.hotelManager.deleteGuestInfo(ID);
    }
    ;
    searchByName() {
        let name = rl.question("Please enter a name you want to search ");
        let find = this.hotelManager.searchGuestByName(name);
        let container = [];
        let data;
        for (let i = 0; i < find.length; i++) {
            data = {
                Name_Customer: find[i].getPerson().getname(),
                Date_of_birth: find[i].getPerson().getdob(),
                Identity: find[i].getPerson().getindentity(),
                Days_of_rent: find[i].getDayOfRents(),
                Room_type: find[i].getType(),
            };
            container.push(data);
        }
        console.table(container);
    }
    ;
    searchByDob() {
        let Dob = rl.question("Please enter a date of birth you want to search ");
        let find = this.hotelManager.searchGuestByDateOfBirth(Dob);
        let container = [];
        let data;
        for (let i = 0; i < find.length; i++) {
            data = {
                Name_Customer: find[i].getPerson().getname(),
                Date_of_birth: find[i].getPerson().getdob(),
                Identity: find[i].getPerson().getindentity(),
                Days_of_rent: find[i].getDayOfRents(),
                Room_type: find[i].getType(),
            };
            container.push(data);
        }
        console.table(container);
    }
    searchByID() {
        let ID = rl.question("Please enter an ID you want to search ");
        let find = this.hotelManager.searchGuestByIdentity(ID);
        let container = [];
        let data;
        for (let i = 0; i < find.length; i++) {
            data = {
                Name_Customer: find[i].getPerson().getname(),
                Date_of_birth: find[i].getPerson().getdob(),
                Identity: find[i].getPerson().getindentity(),
                Days_of_rent: find[i].getDayOfRents(),
                Room_type: find[i].getType(),
            };
            container.push(data);
        }
        console.table(container);
    }
    orderFood() {
        let nameGuest = rl.question("please, Enter guest name!");
        let nameFood = rl.question("Please, enter goods's name! ");
        let qualities = rl.question("Please, enter qualities! ");
        let Order;
        if (this.hotelManager.checkGuestOrderFood(nameGuest, nameFood, qualities) > 0) {
            Order = {
                Guest: nameGuest,
                Food: nameFood,
                SL: qualities
            };
            this.listOrder.push(Order);
        }
        else {
            if (this.hotelManager.checkGuestOrderFood(nameGuest, nameFood, qualities) === -2) {
                console.log('Khong co trong store');
            }
            else {
                console.log('Khong co khach hang nay');
            }
        }
        console.table(this.listOrder);
    }
}
exports.SystemsBehind = SystemsBehind;
