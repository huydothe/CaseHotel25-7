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
const rl = __importStar(require("readline-sync"));
const Systems_1 = require("./Systems");
let choice = -1;
let system = new Systems_1.Systems();
system.initGuest();
system.initGoods();
function menu() {
    console.log("--- Hotel Manager ---");
    console.log("1. Show All Customer.");
    console.log("2. Creat New Customer.");
    console.log("3. Edit Guest's Information.");
    console.log("4. Delete Guest's Information.");
    console.log("5. Search Guest's Information.");
    console.log("6. Guest's Order.");
    console.log("7. Total Amount To Pay.");
    console.log("8. Information of Hotel Systems (--- Admin only ---) .");
    console.log("0. Exit.");
}
function MenuSearch() {
    console.log("1. Search Guest's Information by name");
    console.log("2. Search Guest's Information by Date of birth");
    console.log("3. Search Guest's Information by ID");
    console.log("0. Exit");
}
function menuFood() {
    console.log("-Menu-------------------------");
    console.log("a. --- CocaCola : 12$ per one ---");
    console.log("b. --- Pepsi : 12$ per one ---");
    console.log("c. --- Chip : 50$ per one ---");
    console.log("d. --- Sweet cake : 120$ per one ---");
}
function menuOrder() {
    console.log("1. Order Food.");
    console.log("0. Exit.");
}
do {
    menu();
    choice = +rl.question("Enter your choice :");
    switch (choice) {
        case 1:
            system.showList();
            break;
        case 2:
            system.creat();
            break;
        case 3:
            system.edit();
            break;
        case 4:
            system.delete();
            break;
        case 5:
            console.log("Search Guest's Information");
            let searchChoice = -1;
            do {
                MenuSearch();
                searchChoice = +rl.question("What you gonna do?");
                switch (searchChoice) {
                    case 1:
                        system.searchByName();
                        break;
                    case 2:
                        system.searchByDob();
                        break;
                    case 3:
                        system.searchByID();
                        break;
                }
            } while (searchChoice != 0);
            break;
        case 6:
            console.log("Guest's Order");
            let OrderChoice = -1;
            do {
                menuFood();
                menuOrder();
                OrderChoice = +rl.question("--- Enter your choice ---");
                switch (OrderChoice) {
                    case 1:
                        system.orderFood();
                        break;
                    //     case 2:
                    //         console.log("Tong so tien can thanh toan")
                    //         console.log(system.totalOrderFood);
                }
            } while (OrderChoice != 0);
            break;
        case 7:
            console.log("--- Total Amount To Pay ---");
            let nameGuest = rl.question("Enter Guest's name: ");
            let IDGuest = rl.question("Enter Guest's ID: ");
            let Price = system.getRoomPrice(nameGuest, IDGuest);
            console.log(`So tien phong ma ban phai tra la ${Price} dollar`);
            break;
        case 8:
            console.log("Information About Tenants (--- Admin only ---)");
            break;
    }
} while (choice != 0);
