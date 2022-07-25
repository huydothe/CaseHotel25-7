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
let choice = -1;
function menu() {
    console.log("--- Hotel Manager ---");
    console.log("1. Show All Customer.");
    console.log("2. Creat New Customer.");
    console.log("3. Edit Guest's Information.");
    console.log("4. Delete Guest's Information.");
    console.log("5. Search Guest's Information.");
    console.log("6. Guest's Order.");
    console.log("7. Total Amount To Pay.");
    console.log("8. Information About Tenants (--- Admin only ---) .");
    console.log("0. Exit.");
}
do {
    menu();
    choice = +rl.question("Enter your choice :");
    switch (choice) {
        case 1:
            console.log("Show All Customer");
            break;
        case 2:
            console.log(" Creat New Customer ");
            break;
        case 3:
            console.log("Edit Guest's Information");
            break;
        case 4:
            console.log("Delete Guest's Information");
            break;
        case 5:
            console.log("Search Guest's Information");
            break;
        case 6:
            console.log("Guest's Order");
            break;
        case 7:
            console.log("Total Amount To Pay");
            break;
        case 8:
            console.log("Information About Tenants (--- Admin only ---)");
            break;
    }
} while (choice != 0);
