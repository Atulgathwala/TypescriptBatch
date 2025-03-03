// console.log("TypeScript day 10");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var PERSON = /** @class */ (function () {
    function PERSON(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PERSON.prototype.getFullName = function () {
        console.log("Full Name : ".concat(this.firstName, " ").concat(this.lastName));
    };
    return PERSON;
}());
var Person1 = new PERSON("atul", "Gathwala");
// Person1.getFullName() 
var EMPLOYEE = /** @class */ (function (_super) {
    __extends(EMPLOYEE, _super);
    function EMPLOYEE(firstName, lastName, age, gender) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.age = age;
        _this.gender = gender;
        return _this;
    }
    return EMPLOYEE;
}(PERSON));
var emp1 = new EMPLOYEE("atul", "Gathwala", 65, "male");
emp1.getFullName();
console.log(emp1);
