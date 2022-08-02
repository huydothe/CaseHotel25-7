export class CheckValidate {
    private ValidUsername: RegExp = /^[A-Z]+[a-z|A-z|0-9]{5,15}@gmail.com$/;

    isValidUsername(username:string):boolean{
        return this.ValidUsername.test(username);
    }
}