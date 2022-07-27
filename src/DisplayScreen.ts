import * as rl from 'readline-sync'
import {Systems} from "./Systems";
import {Hotel} from "./Hotel";
import {Person} from "./Person";


let choice = -1;
let system = new Systems();

system.initGuest();
system.initGoods();

enum OptionalChoice {
    Exit = 0,
    Show_All_Customer = 1,
    Creat_New_Customer = 2,
    Edit_Guests_Information = 3,
    Delete_Guests_Information = 4,
    Search_Guests_Information = 5,
    Guests_Order = 6,
    Total_Amount_To_Pay = 7,
    Information_of_Hotel_Systems = 8
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

function menu() {
    console.log("--- Hotel Manager ---");
    console.log("1. Show All Customer");
    console.log("2. Creat New Customer");
    console.log("3. Edit Guest's Information");
    console.log("4. Delete Guest's Information");
    console.log("5. Search Guest's Information");
    console.log("6. Guest's Order");
    console.log("7. Total Amount To Pay");
    console.log("8. Information of Hotel Systems (--- Admin only ---)");
    console.log("0. Exit");
}

function MenuSearch() {
    console.log("--- Search Information ---")
    console.log("1. Search Guest's Information by name");
    console.log("2. Search Guest's Information by Date of birth");
    console.log("3. Search Guest's Information by ID");
    console.log("0. Exit");
}

function menuFood() {
    console.log("-Menu-------------------------")
    console.log("a. --- Coca : 12$/a-bottle ---");
    console.log("b. --- Pepsi : 12$/a-bottle ---");
    console.log("c. --- Chip : 50$/a-pack ---");
    console.log("d. --- Sweet cake : 120$/a-cake ---");
}

function menuOrder() {
    console.log("1. Order Food.");
    console.log("0. Exit.");
}

function menuEdit() {
    console.log("---1.Edit All---");
    console.log("---2.Edit Name---");
    console.log("---3.Edit date of birth---");
    console.log("---4.Edit days of rent---");
    console.log("---5.Edit type of room(King or Normal)---");
    console.log("---0. Exit---");
}

do {
    menu();
    choice = +rl.question("Enter your choice: ");
    switch (choice) {

        case OptionalChoice.Show_All_Customer:
            system.showList();
            break;

        case OptionalChoice.Creat_New_Customer:
            system.creat();
            break;

        case OptionalChoice.Edit_Guests_Information:
            console.log("--- Edit Information ---")
            let editChoice = -1;
            do {
                system.showList();
                menuEdit();
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

        case OptionalChoice.Delete_Guests_Information:
            system.delete();
            break;

        case OptionalChoice.Search_Guests_Information:
            console.log("--- Search Guest's Information ---");
            let searchChoice = -1;
            do {
                MenuSearch();
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
                menuFood();
                menuOrder();
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
            system.checkNameInReceipt(nameGuest,IDGuest);
            break;

        case OptionalChoice.Information_of_Hotel_Systems:
            console.log("Information About Tenants (--- Admin only ---)");
            break;
    }
} while (choice != OptionalChoice.Exit);
