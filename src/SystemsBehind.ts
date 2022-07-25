import {HotelManager} from "./HotelManager";
import * as rl from "readline-sync";
import {Person} from "./Person";
import {Hotel} from "./Hotel";
import {Food} from "./Food";

export class SystemsBehind {
    hotelManager = new HotelManager();

    inputGuestInfo() {
        let name = rl.question("What is Guest's name? ");
        let dob = rl.question("What is your Date of Birth? ");
        let identity = rl.question("What is your Identity? ");
        return new Person(name, dob, identity);
    };

    inputGuestRoom() {
        let guest = this.inputGuestInfo();
        let dayOfRent = rl.question("How long do you want to rent?");
        let type = rl.question("What kind of room do you want to rent?");
        return new Hotel(dayOfRent, type, guest);
    };

    inputFood(){
        let name=rl.question("What food do you want to order");
        let amount=rl.question("What food do you want to order");
        return new Food(name,amount);
    }

    showList() {
        console.log("--- Guest List ---");
        let guest = this.hotelManager.showAllCustomer();
        let data;
        let show;
        let container=[];
        for(let i=0; i<guest.length; i++){
            data={
                Name_Customer: guest[i].getPerson().getname(),
                Date_of_birth: guest[i].getPerson().getdob(),
                Identity: guest[i].getPerson().getindentity(),
                Days_of_rent: guest[i].getDayOfRents(),
                Room_type:guest[i].getType(),
            };
            container.push(data);
        }
        console.table(container);
    };

    creat() {
        console.log("--- Creat new customer's Info ---");
        let newCustomer = this.inputGuestRoom();
        this.hotelManager.creatNewCustomer(newCustomer);
    };

    edit() {
        console.log("--- Edit Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated");
        let guest = this.inputGuestRoom();
        this.hotelManager.editGuestInfo(ID, guest);
    };

    delete() {
        console.log("--- Delete a Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated");
        this.hotelManager.deleteGuestInfo(ID);
    };

    searchByName(){
        let name=rl.question("Please enter a name you want to search");
        let find = this.hotelManager.searchGuestByName(name);
        console.table(find);
    }

    searchByDob(){
        let Dob=rl.question("Please enter a date of birth you want to search");
        let find= this.hotelManager.searchGuestByDateOfBirth(Dob);
        console.table(find);
    }

    searchByID(){
        let ID=rl.question("Please enter an ID you want to search");
        let find= this.hotelManager.searchGuestByIdentity(ID);
        console.table(find);
    }
}