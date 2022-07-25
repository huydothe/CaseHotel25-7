import * as rl from 'readline-sync'
import {SystemsBehind} from "./SystemsBehind";

let choice = -1;
let system = new SystemsBehind();

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

function MenuSearch() {
    console.log("1. Search Guest's Information by name");
    console.log("2. Search Guest's Information by Date of birth");
    console.log("3. Search Guest's Information by ID");
    console.log("0. Exit");
}

function menuFood(){
    console.log("1. CocaCola : 12$");
    console.log("2. Pepsi");
    console.log("3. Chip");
    console.log("4. Sweet cake");
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
            system.edit()
            break;
        case 4:
            system.delete();
            break;
        case 5:
            console.log("Search Guest's Information");
            let searchChoice=-1;
            do{
                MenuSearch();
                searchChoice= +rl.question("What you gonna do?");
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
            }while (searchChoice != 0);
            break;
        case 6:
            console.log("Guest's Order");
            let foodChoice=-1;
            do{
                menuFood();
                foodChoice= +rl.question("What food do you want?");
                switch (foodChoice){
                    case 1:
                        console.log("CocaCola");
                        break;
                    case 2:
                        console.log("Pepsi");
                        break;
                    case 3:
                        console.log("Chip");
                        break;
                    case 4:
                        console.log("Sweet Cake");
                }
            }while (foodChoice!=0)
            break;
        case 7:
            console.log("Total Amount To Pay");
            break;
        case 8:
            console.log("Information About Tenants (--- Admin only ---)");
            break;
    }
} while (choice != 0);
