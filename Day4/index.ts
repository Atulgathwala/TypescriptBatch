// console.log("Day3 TypeScript is going  ");

// function greet() {
//     console.log("hii how are you !!");
    
// } greet();

// ? this function will tell You wheter you are eligible for vote or not

// let a = function (age: number): string {
    
//     if (age >= 18) {
//        return "You are eligible for vote"
//     }
//     else {
//        return "You are not eligible for vote"
        
//     }


    
// }

// console.log(a);
// a();

// let result = a(17);

// console.log(result);



// ? arrow function


// function demo() {
//     return "this is demo from normal function"
// }

// console.log(demo());


// let a = greet => greet;
 

// console.log(a("this is greet fucntion"));



// let isAbletoVote = (age: number) : string => {
//         if (age >= 18) {
//        return "You are eligible for vote"
//     }
//     else {
//        return "You are not eligible for vote"
        
//     }
// }

// console.log(isAbletoVote(22));


// ? Object
// ? it is programmatical reprsenation of real world entity


// ? object will store the data in the form of key value pair , key and value will serated by :, combine this key and value is known as property and each property of any object will be seprated by ,

//  * object literal {}


// let person = {
//     name: "atul",
//     age: 99,
//     bankBalance: null,
//     isMarried:false
// }

// ? to acces the properties of the object you can access by two ways first one (.) and [];

// console.log(person.name);
// console.log(person["age"]);


// let person = {
//     name:string
// }

// let age: number = 45;
// let Person: {};

// let person1: {
//     name: string;
//     age:number
// } = {
//     name: "atul",
//     age:99,
// }


// let person2: {
//     name: string;
//     age:number
// } = {
//     name: "atul",
//     age:99,
// }

// let person3: {
//     name: string,
//     age:number
// } = {
//     name: "imran",
//     age:88,
// }

// let person4: {
//     name: string,
//     age:number
// } = {
//      name: "kavitha",
//     age:59,
// }


// ? 1. built in types and 2. user defined

// let age:number


type PERSON = {
    name: string,
   readonly age: number
    ismarried ?:boolean

}


let person1: PERSON = {
    name: "atul",
    age: 66,
    ismarried:true,
}

let person2: PERSON = {
     name: "xyz",
    age:89,
}

// person2.age = 22;
console.log(person2);













