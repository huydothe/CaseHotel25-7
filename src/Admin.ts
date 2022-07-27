export class Admin{
    private username:string;
    private password:string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    getUserName(){
        return this.username;
    }

    setUserName(username:string){
        this.username=username;
    }

    getPassword(){
        return this.password;
    }

    setPassword(password:string){
        this.password=password;
    }
}