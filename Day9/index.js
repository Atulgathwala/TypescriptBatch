// console.log("This is day 9 Typescript");
// // ? interface
// // ? an interface is used to define the structure of an object , whatever the properties you are going to define you mandatorily needs to utilze . in the interface we can only provide the declaration we are not supposed to provided the values to the declaration.
// // interface EMP {
// //     name: string;
// //     greet():void;
// // }
// // let obj: EMP = {
// //     name: "kavitha",
// //     greet() {
// //         console.log("This is greet from obj");
// //     }
// // }
// // obj.greet();
// // ? Checking the operations on interface
// // interface name{
// //     name:string
// // }
// // interface age{
// //     age:number
// // }
// // let Person: name & age = {
// //     name: "imran",
// //     age:45,
// // }
// // console.log(Person);
// // let Person2: name | age={
// //     name:"imran"
// // }
// interface EMP {
//     name: string,
//     age: number,
//    readonly email:string
//     isMarried ?:boolean
// }
// let person1: EMP = {
//     name: "sneha",
//     email:"abc@gmail.com",
//     age: 99,
// }
// console.log(person1.name);
// person1.name = "neha"
// console.log(person1.name);
// // person1.email = "BCJAHB"
// console.log(person1.email);
// ? union 
var isMarried = "yess";
var obj = {
    b: "amit",
    a: 456
};
