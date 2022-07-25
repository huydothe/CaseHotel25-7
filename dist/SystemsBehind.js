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
        let dayOfRent = rl.question("How long do you want to rent?");
        let type = rl.question("What kind of room do you want to rent?");
        return new Hotel_1.Hotel(dayOfRent, type, guest);
    }
    ;
    inputFood() {
        let name = rl.question("What food do you want to order");
        let amount = rl.question("What food do you want to order");
        return new Food_1.Food(name, amount);
    }
    showList() {
        console.log("--- Guest List ---");
        let guest = this.hotelManager.showAllCustomer();
        let data;
        let show;
        let container = [];
        for (let i = 0; i < guest.length; i++) {
            data = {
                Name_Customer: guest[i].getPerson().getname(),
                Date_of_birth: guest[i].getPerson().getdob(),
                Identity: guest[i].getPerson().getindentity(),
                Days_of_rent: guest[i].getDayOfRents(),
                Room_type: guest[i].getType(),
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
        let ID = rl.question("Please enter the identity which need to be updated");
        let guest = this.inputGuestRoom();
        this.hotelManager.editGuestInfo(ID, guest);
    }
    ;
    delete() {
        console.log("--- Delete a Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated");
        this.hotelManager.deleteGuestInfo(ID);
    }
    ;
    searchByName() {
        let name = rl.question("Please enter a name you want to search");
        let find = this.hotelManager.searchGuestByName(name);
        console.table(find);
    }
    searchByDob() {
        let Dob = rl.question("Please enter a date of birth you want to search");
        let find = this.hotelManager.searchGuestByDateOfBirth(Dob);
        console.table(find);
    }
    searchByID() {
        let ID = rl.question("Please enter an ID you want to search");
        let find = this.hotelManager.searchGuestByIdentity(ID);
        console.table(find);
    }
}
exports.SystemsBehind = SystemsBehind;
