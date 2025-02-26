// console.log("hii this is day 5 typeScript");

// function person(name: string, age: number, isMarried: boolean):object {
    
//     return {name , age , isMarried}
// }

// let result = person("akshay", 17, true);

// console.log(result);

// let a: object = {
    
// };

// ? function returning function

// function a(num1: number): (num2:number) => number{
//     return function b(num2:number) {
//         return num1+num2;
//     }
// }

// console.log(a(12)(50));

// console.log(b(45));


function outer(num1: number): (num2: number) => number {
    
    return function inner(num2: number) {
        return num1 + num2;
    }

    
}


// console.log(outer(10)(50));



let arr = ["kavitha", true, ["imran"], { age: 27 }];

let roleNUmber: number[] = [45, 78, 98];

// ? write a program to perform addtion of all the elements or number which is given inside an array


let numArray: number[] = [10, 20, 30, 40, 50];

let sum = 0;
console.log ("before iteration",sum);


for (let i = 0; i< numArray.length; i++){
    sum += numArray[i];
}

console.log("after iteration",sum);
