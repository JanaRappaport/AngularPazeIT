export class User {
    Id: number 
    userName: string
    userLastName: string | undefined
    email: string
    password: string 
     
    constructor(id:number, 
        useName:string
        ,email:string, password:string , userLastName?:string ){
        this.Id=id;
        this.userName=useName;
        this.userLastName=undefined?undefined:userLastName;
        this.email=email;
        this.password=password ;
    }
    

}

