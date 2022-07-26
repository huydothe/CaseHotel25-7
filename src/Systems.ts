import {HotelManager} from "./HotelManager";
import * as rl from "readline-sync";
import {Person} from "./Person";
import {Hotel} from "./Hotel";
import {Food} from "./Food";

const kingPrice: number = 5000;
const normalPrice: number = 1000;
const cocaPrice: number = 12;
const pepsiPrice: number = 12;
const chipPrice: number = 5;
const sweetCakePrice: number = 120;

export class Systems {
    hotelManager = new HotelManager();
    listOrder: any[] = [];
    totalOrderFood:number=0;

    initGuest() {
        let Huy = new Person("Huy", "11/06/1999", "110699");
        let Nam = new Person("Nam", "22/07/1989", "22071989");
        let An = new Person("An", "05/05/2002", "05052002");
        let Do = new Person("Do", "01/06/1994", "01061994");


        let HuyOrder = new Hotel("12", "King", kingPrice, Huy);
        let NamOrder = new Hotel("10", "Normal", normalPrice, Nam);
        let AnOrder = new Hotel("3", "King", kingPrice, An);
        let DoOrder = new Hotel("8", "Normal", normalPrice, Do);

        this.hotelManager.creatNewCustomer(HuyOrder);
        this.hotelManager.creatNewCustomer(NamOrder);
        this.hotelManager.creatNewCustomer(AnOrder);
        this.hotelManager.creatNewCustomer(DoOrder);
    }

    initGoods() {
        let Coca = new Food("Coca", "1000", cocaPrice);
        let Pepsi = new Food("Pepsi", "1000", pepsiPrice);
        let Chip = new Food("Chip", "500", chipPrice);
        let SweetCake = new Food("SweetCake", "200", sweetCakePrice);

        this.hotelManager.creatGoods(Coca);
        this.hotelManager.creatGoods(Pepsi);
        this.hotelManager.creatGoods(Chip);
        this.hotelManager.creatGoods(SweetCake);
    }

    inputGuestInfo() {
        let name = rl.question("What is Guest's name? ");
        let dob = rl.question("What is your Date of Birth? ");
        let identity = rl.question("What is your Identity? ");
        return new Person(name, dob, identity);
    };

    inputGuestRoom() {
        let guest = this.inputGuestInfo();
        let dayOfRent = rl.question("How long do you want to rent? ");
        let type = rl.question("What kind of room do you want to rent? ");

        function getPrice() {
            if (type === 'king') {
                return kingPrice;
            } else if (type === 'normal') {
                return normalPrice;
            } else {
                return 0;
            }
        }
        let RoomPrice = getPrice();
        return new Hotel(dayOfRent, type, RoomPrice, guest);
    };

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
    };

    creat() {
        console.log("--- Creat new customer's Info ---");
        let newCustomer = this.inputGuestRoom();
        this.hotelManager.creatNewCustomer(newCustomer);
    };

    edit() {
        console.log("--- Edit Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated ");
        let guest = this.inputGuestRoom();
        this.hotelManager.editGuestInfo(ID, guest);
    };

    delete() {
        console.log("--- Delete a Customer Information ---");
        let ID = rl.question("Please enter the identity which need to be updated ");
        this.hotelManager.deleteGuestInfo(ID);
    };

    searchByName() {
        let name = rl.question("Please enter a name you want to search ");
        let findName = this.hotelManager.searchGuestByName(name);
        let container = [];
        let data;
        for (let i = 0; i < findName.length; i++) {
            data = {
                Name_Customer: findName[i].getPerson().getname(),
                Date_of_birth: findName[i].getPerson().getdob(),
                Identity: findName[i].getPerson().getindentity(),
                Days_of_rent: findName[i].getDayOfRents(),
                Room_type: findName[i].getType(),
            };
            container.push(data)
        }
        console.table(container);
    };

    searchByDob() {
        let Dob = rl.question("Please enter a date of birth you want to search ");
        let findDob = this.hotelManager.searchGuestByDateOfBirth(Dob);
        let container = [];
        let data;
        for (let i = 0; i < findDob.length; i++) {
            data = {
                Name_Customer: findDob[i].getPerson().getname(),
                Date_of_birth: findDob[i].getPerson().getdob(),
                Identity: findDob[i].getPerson().getindentity(),
                Days_of_rent: findDob[i].getDayOfRents(),
                Room_type: findDob[i].getType(),
            };
            container.push(data)
        }
        console.table(container);
    }

    searchByID() {
        let ID = rl.question("Please enter an ID you want to search ");
        let findID = this.hotelManager.searchGuestByIdentity(ID);
        let container = [];
        let data;
        for (let i = 0; i < findID.length; i++) {
            data = {
                Name_Customer: findID[i].getPerson().getname(),
                Date_of_birth: findID[i].getPerson().getdob(),
                Identity: findID[i].getPerson().getindentity(),
                Days_of_rent: findID[i].getDayOfRents(),
                Room_type: findID[i].getType(),
            };
            container.push(data)
        }
        console.table(container);
    }



    orderFood() {
        let nameGuest = rl.question("please, Enter guest name!")
        let nameFood = rl.question("Please, enter goods's name! ");
        let qualities = rl.question("Please, enter qualities! ");
        function checkPriceFood(){
            if(nameFood==="Coca"){
                return cocaPrice;
            }else if(nameFood === "Pepsi"){
                return pepsiPrice;
            }else if(nameFood === "Chip"){
                return chipPrice;
            }else if(nameFood === "SweetCake"){
                return sweetCakePrice;
            }else {
                return 0;
            }
        }
        let price=checkPriceFood()*(+qualities);
        let Order;
        if (this.hotelManager.checkGuestOrderFood(nameGuest, nameFood, qualities) > 0) {
            Order = {
                Guest: nameGuest,
                Food: nameFood,
                Qualities: qualities,
                Price: price,
            };
            this.listOrder.push(Order);
        } else {
            if (this.hotelManager.checkGuestOrderFood(nameGuest, nameFood, qualities) === -2) {
                console.log('Khong co trong store');
            } else {
                console.log('Khong co khach hang nay');
            }
        }
        console.table(this.listOrder);
    }

    getRoomPrice(name:string,IDGuest:string) {
        let total:number=0;
        for(let i=0; i<this.hotelManager.showAllCustomer().length; i++){
            if(this.hotelManager.showAllCustomer()[i].getPerson().getindentity()===IDGuest &&
               this.hotelManager.showAllCustomer()[i].getPerson().getname()===name){
                total+= this.hotelManager.showAllCustomer()[i].getPrice() * (+this.hotelManager.showAllCustomer()[i].getDayOfRents());
            }
        }
        return total;
    }
}