export class CheckValidate {
    private ValidUsername: RegExp = /^[A-Z]+[a-z|A-z|0-9]{5,15}@gmail.com$/;
    private ValidPassword: RegExp = /^[a-z|A-z|0-9|]+[a-z|A-z|0-9]{5,}$/;

    isValidUsername(username:string):boolean{
        return this.ValidUsername.test(username);
    }

    isValidPassword(password: string):boolean {
        return this.ValidPassword.test(password);
    }
}