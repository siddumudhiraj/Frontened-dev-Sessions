// TypeNarrowing - `Type Narrowing is the process of converting a broad type into a more specific type
//  so TypeScript knows exactly what operations are safe.

//Types : 1. instanceof is an operator in TypeScript (and JavaScript) 
// used to check whether an object was created from a particular class. Returns true if corrct or false

 class Employee{
    work(){
        console.log("working");
    }
}
class Manager{
    manage(){
        console.log("managing");
    }
}

 function performTask(person: Employee | Manager){
    if(person instanceof Employee){
        person.work();
    }else{
        person.manage();
    }
}
let emp = new Employee();
let man = new Manager();
performTask(emp);

//  Example 2
class Student {}

class Teacher {}

let s1 = new Student();

console.log(s1 instanceof Student);
console.log(s1 instanceof Teacher);

// 2. typeof Used for primitive types.
// Example:
let value1: string | number = "Hello";
console.log(value1.toUpperCase()); // Error

let value: string | number = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}

// 3. Equality Check
let valuee: string | null = "siddu";
if(valuee !== null){
    console.log(valuee.toUpperCase());
}

// 4. Truthiness narrowing
let username : String | undefined = "siddu";
if(username){
    console.log(username.toUpperCase());
}

// Literals in typescript
// string literal
 type direction = "up" | "down" | "right"
let dir : direction;
dir: "up";
dir: "left";

// number literal
type dicevalue = 1|2|2|3|4
let dice: dicevalue;
dice = 4;

// TypeAssertions - A Type Assertion tells TypeScript: "Trust me. I know the actual type of this value."
// example1: 
 let value2: any = "string";
let str = value2 as string;
console.log(str.toUpperCase());
// example2: 
let value3 : unknown = "Hello"
let str1 = value3 as string
console.log(str1.toUpperCase());

// Type Guard
// 1. Now comes the safer approach.
// 2. A Type Guard checks the type at runtime so TypeScript can safely narrow the type.

// Examples use typeOf, Instanceof, and in operators for typeguarding