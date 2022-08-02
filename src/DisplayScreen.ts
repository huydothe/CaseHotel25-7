import * as rl from 'readline-sync'
import {Systems} from "./Systems";
import {Hotel} from "./Hotel";
import {Person} from "./Person";
import {Menu} from "./Menu";


let choice = -1;
let system = new Systems();
let menu = new Menu();

system.initGuest();
system.initGoods();
system.admin();

enum OptionalChoice {
    Exit = 0,
    Show_All_Customer = 1,
    Search_Guests_Information = 2,
    Guests_Order = 3,
    Total_Amount_To_Pay = 4,
    Information_of_Hotel_Systems = 5,
}

enum AdminChoice {
    Exit = 0,
    Creat_New_Customer = 1,
    Edit_Guests_Information = 2,
    Delete_Guests_Information = 3,
    Creat_a_Account = 4,
    Show_Admin_Info = 5,
    Show_Goods = 6
}

enum Edit {
    Exit = 0,
    Edit_All = 1,
    Edit_Name = 2,
    Edit_date_of_birth = 3,
    Edit_days_of_rent = 4,
    Edit_type_of_room = 5,
}

enum Search {
    Exit = 0,
    Search_Guests_Information_by_name = 1,
    Search_Guests_Information_by_Date_of_birth = 2,
    Search_Guests_Information_by_ID = 3
}

enum OrderFood {
    Exit = 0,
    OrderFood = 1,
}

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
                searchChoice = +rl.question("Enter your choice: ");
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
                            console.log("--- Creat new Customer ---")
                            system.creat();
                            system.showList();
                            break;

                        case AdminChoice.Edit_Guests_Information:
                            console.log("--- Edit Information ---")
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
                                        system.editDayOfRent()
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
                            } else {
                                console.log("!!!--- this username isn't available. please enter a new one ---!!!")
                                console.log("!!!--- Please, Capitalizes the first letter of username and the username must be more than 5 words, less than 15 words and end with @gmail.com ---!!!")
                            }
                            break;

                        case AdminChoice.Show_Admin_Info:
                            console.log("---Show Admin account ---");
                            system.showAdminAccount();
                            break;
                        case AdminChoice.Show_Goods:
                            console.log("--- Show All goods ---");
                            system.showGoods();
                    }
                } while (Choice != 0);
            } else {
                console.log("!!! --- Your Information is wrong --- !!!");
            }
            break;
    }
} while (choice != OptionalChoice.Exit);

