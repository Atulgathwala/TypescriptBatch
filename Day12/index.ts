// console.log("This is day 12 TS");

// ? protected

// ? in the case of this protected you can access the class members in its own class or in sub class

// class PARENT{
//    protected pGold = 50;
//    protected demo() {
//         console.log("Hii this is demo");
        
        
//     }
// }

// class child extends PARENT{
//     ChildGold = 10;

//     totalGold() {
//         console.log(this.pGold+this.ChildGold);
        
//     }

// }


// class cc1 extends child{
//     ccgold = 20;
//     allGold() {
//        this.pGold+this.ChildGold+this.ccgold
//    }
// }


// let c1 = new child();
// c1.totalGold()
// // c1.demo();


// create a bank class and put the functionality of bank

// ? a person can able tot open the account
// ? a person can withdraw depsoit
// ? a person can update the password


// ? generics Typescript generics is a tool which provides a way to create a reusable components. it creates a component that work with a variety of datatypes rather than Single datatType .

// function demoWithString(args: string): string{
//     return "string"
// }

// function demowithBoolean(args: boolean): boolean{
//     return true;
// }

// function demoWithNumber(args: number): number{
//     return 12;
// }


// ? generic function

function demo<gen>(args: gen): gen{
    return args;
}

console.log(demo<string>("this is string"));
console.log(demo<number>(45));
console.log(demo<boolean>(false));


// * benefits of generics

// 1. Type safety and error detection
//2. code reusability and flexiblity
// 3. better maintainability

// ? generics in interface

// interface PERSON<T>{
//     id: number,
//     name: string,
//     otherDATA:T,

// }


// let USER1: PERSON<String |number> = {
//     id: 1,
//     name: "imran",
//     otherDATA: 45,
// }


// type PERSON<T>{
//     id: number,
//     name: string,
//     otherDATA:T,

// }


// let USER1: PERSON<String |number> = {
//     id: 1,
//     name: "imran",
//     otherDATA: 45,
// }

// ? You need to use this generics in all non primitive dataTypes.
// ? object , array , tuple , functions






