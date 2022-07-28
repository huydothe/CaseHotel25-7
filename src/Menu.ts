export class Menu{
    menu() {
        console.log("---------- Hotel Manager ----------");
        console.log("--- 1. Show All Customer ---");
        console.log("--- 2. Search Guest's Information ---");
        console.log("--- 3. Guest's Order ---");
        console.log("--- 4. Total Amount To Pay ---");
        console.log("--- 5. Information of Hotel Systems (--- Admin only ---) ---");
        console.log("--- 0. Exit ---");
    }

    MenuSearch() {
        console.log("---------- Search Information ---------");
        console.log("--- 1. Search Guest's Information by name ---");
        console.log("--- 2. Search Guest's Information by Date of birth ---");
        console.log("--- 3. Search Guest's Information by ID ---");
        console.log("--- 0. Exit ---");
    }

    menuFood() {
        console.log("-Menu--------------------------------");
        console.log("a. Coca : 12$/a-bottle ");
        console.log("b. Pepsi : 12$/a-bottle ");
        console.log("c. Chip : 50$/a-pack ");
        console.log("d. Sweet cake : 120$/a-cake ");
    }

    menuOrder() {
        console.log("--- 1. Order Food ---");
        console.log("--- 0. Exit ---");
    }

    menuEdit() {
        console.log("---1.Edit All---");
        console.log("---2.Edit Name---");
        console.log("---3.Edit date of birth---");
        console.log("---4.Edit days of rent---");
        console.log("---5.Edit type of room(King or Normal)---");
        console.log("---0. Exit---");
    }

    menuAdmin() {
        console.log("--- 0.Exit ---");
        console.log("--- 1. Creat New Customer ---");
        console.log("--- 2. Edit Guest's Information ---");
        console.log("--- 3. Delete Guest's Information ---");
        console.log("--- 4. Creat a Account ---");
        console.log("--- 5. Show Admin Information ---");
    }
}