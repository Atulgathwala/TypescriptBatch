// console.log("This is Day 11 Typescript");

// ? access Modifiers

// access modfiers are the keywords used in oops to specify the visiblity or accessibility of classes , methods and variable , it is ensuring that certain part of the class should be hidded or it should not be expossed publicly.


// class PARENT {
//     private Pgold = 50;
//     parentGoldDetails() {
//         console.log("Parent's gold = "+this.Pgold);
        
//     }
//  public demo() {
//         console.log("This is parent method");
        
//     }
// }

// let Parent1 = new PARENT();
// Parent1.parentGoldDetails();

// class CHILD extends PARENT{
//     CGold = 5;

//     totalGold = this.Pgold + this.CGold;

//     totalGoldDetails() {
//       console.log("Total Gold of child  : "+this.totalGold);
      
        
//     }
    
// }


// let child1 = new CHILD();
// child1.totalGoldDetails()

// child1.demo()


// // ? three types of access modifiers they are as follows
// // 1. public visiblity will be in any classes


// ? Private



// class PERSON {
//     private age:number;
//     private name: string;
    
//     constructor(age: number, name: string) {
//         this.name = name;
//             this.age = age;
//     }
// }


// class EMPLOYEE extends PERSON {


// }

// ? readOnly  , Writeable , read And Write


// ? getters and setters

class BANK {
    private accountNUmber= 123456789;
    private balance:number;
    private Password: string;

    constructor( balance: number, password: string) {
       
        this.balance = balance;
        this.Password = password;
    }
    getAccountNumber() {
        console.log("this is Account NUmber"+this.accountNUmber);
        
    }

    getBalance() {
        console.log("this is Your Balance "+this.balance);
        
    }

    setBalance(amount: number) {
        this.balance += amount;
        console.log(`Your Account has been credited with ${amount} and your balance is ${this.balance}`);
        
    
    }
    
    setPassword(pass:string) {
        this.Password = pass;
        console.log("password updated successfully ");
        
            
    }

             
}

let ImranBank = new BANK(1000, "abc123");

ImranBank.getBalance();
ImranBank.setBalance(5000);
ImranBank.getAccountNumber();
ImranBank.setPassword("img123")

