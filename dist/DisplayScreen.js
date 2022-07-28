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
const Menu_1 = require("./Menu");
let choice = -1;
let system = new Systems_1.Systems();
let menu = new Menu_1.Menu();
system.initGuest();
system.initGoods();
system.admin();
var OptionalChoice;
(function (OptionalChoice) {
    OptionalChoice[OptionalChoice["Exit"] = 0] = "Exit";
    OptionalChoice[OptionalChoice["Show_All_Customer"] = 1] = "Show_All_Customer";
    OptionalChoice[OptionalChoice["Search_Guests_Information"] = 2] = "Search_Guests_Information";
    OptionalChoice[OptionalChoice["Guests_Order"] = 3] = "Guests_Order";
    OptionalChoice[OptionalChoice["Total_Amount_To_Pay"] = 4] = "Total_Amount_To_Pay";
    OptionalChoice[OptionalChoice["Information_of_Hotel_Systems"] = 5] = "Information_of_Hotel_Systems";
})(OptionalChoice || (OptionalChoice = {}));
var AdminChoice;
(function (AdminChoice) {
    AdminChoice[AdminChoice["Exit"] = 0] = "Exit";
    AdminChoice[AdminChoice["Creat_New_Customer"] = 1] = "Creat_New_Customer";
    AdminChoice[AdminChoice["Edit_Guests_Information"] = 2] = "Edit_Guests_Information";
    AdminChoice[AdminChoice["Delete_Guests_Information"] = 3] = "Delete_Guests_Information";
    AdminChoice[AdminChoice["Creat_a_Account"] = 4] = "Creat_a_Account";
    AdminChoice[AdminChoice["Show_Admin_Info"] = 5] = "Show_Admin_Info";
})(AdminChoice || (AdminChoice = {}));
var Edit;
(function (Edit) {
    Edit[Edit["Exit"] = 0] = "Exit";
    Edit[Edit["Edit_All"] = 1] = "Edit_All";
    Edit[Edit["Edit_Name"] = 2] = "Edit_Name";
    Edit[Edit["Edit_date_of_birth"] = 3] = "Edit_date_of_birth";
    Edit[Edit["Edit_days_of_rent"] = 4] = "Edit_days_of_rent";
    Edit[Edit["Edit_type_of_room"] = 5] = "Edit_type_of_room";
})(Edit || (Edit = {}));
var Search;
(function (Search) {
    Search[Search["Exit"] = 0] = "Exit";
    Search[Search["Search_Guests_Information_by_name"] = 1] = "Search_Guests_Information_by_name";
    Search[Search["Search_Guests_Information_by_Date_of_birth"] = 2] = "Search_Guests_Information_by_Date_of_birth";
    Search[Search["Search_Guests_Information_by_ID"] = 3] = "Search_Guests_Information_by_ID";
})(Search || (Search = {}));
var OrderFood;
(function (OrderFood) {
    OrderFood[OrderFood["Exit"] = 0] = "Exit";
    OrderFood[OrderFood["OrderFood"] = 1] = "OrderFood";
})(OrderFood || (OrderFood = {}));
do {
    menu.menu();
    choice = +rl.question("Enter your choice: ");
    switch (choice) {
        case OptionalChoice.Show_All_Customer:
            system.showList();
            break;
        case OptionalChoice.Search_Guests_Information:
            console.log("--- Search Guest's Information ---");
            let searchChoice = -1;
            do {
                menu.MenuSearch();
                searchChoice = +rl.question("What you gonna do? ");
                switch (searchChoice) {
                    case Search.Search_Guests_Information_by_name:
                        system.searchByName();
                        break;
                    case Search.Search_Guests_Information_by_Date_of_birth:
                        system.searchByDob();
                        break;
                    case Search.Search_Guests_Information_by_ID:
                        system.searchByID();
                        break;
                }
            } while (searchChoice != Search.Exit);
            break;
        case OptionalChoice.Guests_Order:
            console.log("--- Guest's Order ---");
            let OrderChoice = -1;
            do {
                menu.menuFood();
                menu.menuOrder();
                OrderChoice = +rl.question("Enter your choice: ");
                switch (OrderChoice) {
                    case OrderFood.OrderFood:
                        system.orderFood();
                        break;
                }
            } while (OrderChoice != OrderFood.Exit);
            break;
        case OptionalChoice.Total_Amount_To_Pay:
            console.log("--- Total Amount To Pay ---");
            let nameGuest = rl.question("Enter Guest's name: ");
            let IDGuest = rl.question("Enter Guest's ID: ");
            system.checkNameInReceipt(nameGuest, IDGuest);
            break;
        case OptionalChoice.Information_of_Hotel_Systems:
            console.log("Information About Tenants (!----- Admin only -----!)");
            let username = rl.question("Enter your UserName: ");
            let password = rl.question("Enter your Password: ");
            let validate = system.validateAdmin(username, password);
            if (validate) {
                let Choice = -1;
                do {
                    menu.menuAdmin();
                    Choice = +rl.question("Enter your choice: ");
                    switch (Choice) {
                        case AdminChoice.Creat_New_Customer:
                            console.log("--- Creat new Customer ---");
                            system.creat();
                            system.showList();
                            break;
                        case AdminChoice.Edit_Guests_Information:
                            console.log("--- Edit Information ---");
                            let editChoice = -1;
                            do {
                                system.showList();
                                menu.menuEdit();
                                editChoice = +rl.question("Enter your choice: ");
                                switch (editChoice) {
                                    case Edit.Edit_All:
                                        system.edit();
                                        break;
                                    case Edit.Edit_Name:
                                        system.editName();
                                        break;
                                    case Edit.Edit_date_of_birth:
                                        system.editDob();
                                        break;
                                    case Edit.Edit_days_of_rent:
                                        system.editDayOfRent();
                                        break;
                                    case Edit.Edit_type_of_room:
                                        system.editType();
                                        break;
                                }
                            } while (editChoice != Edit.Exit);
                            break;
                        case AdminChoice.Delete_Guests_Information:
                            console.log("--- Delete a Customer ---");
                            system.showList();
                            system.delete();
                            system.showList();
                            console.log("--- Delete success ---");
                            break;
                        case AdminChoice.Creat_a_Account:
                            console.log("--- Creat a Account ---");
                            let newUserName = rl.question("---Enter New Admin Username---: ");
                            let isValidUsername = system.checkValidateUser(newUserName);
                            if (isValidUsername) {
                                let newPassword = rl.question("---Enter New Admin Password---: ");
                                system.addAdminAccount(newUserName, newPassword);
                                console.log("--- Creat account success ---");
                            }
                            else {
                                console.log("!!!--- this username isn't available. please enter a new one ---!!!");
                            }
                            break;
                        case AdminChoice.Show_Admin_Info:
                            console.log("---Show Admin account ---");
                            system.showAdminAccount();
                            break;
                    }
                } while (Choice != 0);
            }
            else {
                console.log("!!! --- Your Information is wrong --- !!!");
            }
            break;
    }
} while (choice != OptionalChoice.Exit);
// 864
