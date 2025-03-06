// console.log("TypeScript day 10");

// class Vehicle {
//     start: string
//     engine: string
//     Tyres:number
    
//     constructor(START:string, ENGINE:string, TYRES:number) {
//         this.start = START;
//         this.engine = ENGINE;
//         this.Tyres = TYRES;
        
        
//     }
// }

// let car = new Vehicle("brrrrrromm ", "mHawk" , 4);
// console.log(car);


// let vh2 = new Vehicle();
// console.log(vh2);


// ? Inheritance

class PERSON {
firstName: string
    lastName: string
    
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        console.log(`Full Name : ${this.firstName} ${this.lastName}`);
        
    }
}

let Person1 = new PERSON("atul", "Gathwala");
// Person1.getFullName() 

class EMPLOYEE extends PERSON{
    age: number
    gender: string
    
    constructor(firstName: string, lastName: string, age: number, gender:string
    ) {
        super(firstName, lastName);
        this.age = age;
        this.gender = gender;
    }
 
}


let emp1 = new EMPLOYEE("atul", "Gathwala", 65, "male");
emp1.getFullName()

console.log(emp1);




