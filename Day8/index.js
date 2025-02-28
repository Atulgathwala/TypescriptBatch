// console.log("This is Day8 typescript");
// ? default assignability
// let a: any = 45;
// a.toLowerCase();
// let b: unknown = 45;
// b.toLwerCase();
// let a: any = 45;
// let b: unknown = 45;
// let c: string = a;
// console.log(typeof c);
// let d:any = b;
// ? Union
// let isMarried: boolean | string | number = 45;
// type a = {
//     a:string
// }
// type b = {
//     b:number
// }
// type c = {
//     c:boolean
// }
// // ? union
// // let obj: a|b|c = {
// // c:true
// // }
// // ? intersection
// let obj: a&b&c = {
//     a: "hii",
//     b: 45,
//     c:true
// }
// ? enums in Typescript
// ? enum is the short form of enumeration , this is the way to define a set of named values  , these values be used to represents a collection of related constants in a more organized manner
// let weekDaysObj = {
//     "0": "sunday",
//     "1":"tuesday"
// }
// console.log(weekDaysObj);
// ?In typescript we have two types of enums
// number enum
// string enum
// let obj = {
//     name: "atul",
//     age: 45
// }
// console.log(obj["atul"]);
// enum WeekDays{
//     sunday=5,
//     monday=7,
//     tuesday,
//     wednesday=8,
//     thursday,
//     friday,
//     saturday
// }
// console.log(WeekDays.monday);
var TrafficLight;
(function (TrafficLight) {
    TrafficLight[TrafficLight["yellow"] = 0] = "yellow";
    TrafficLight["red"] = "RED";
    TrafficLight[TrafficLight["green"] = void 0] = "green";
})(TrafficLight || (TrafficLight = {}));
// let signalInfo = TrafficLight.red;
// console.log(signalInfo);
