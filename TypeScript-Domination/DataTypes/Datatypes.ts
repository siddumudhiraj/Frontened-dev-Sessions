// string
let name: string = "siddu";
console.log(name);
// number
let age: number = 45;
// boolean 
let condition: boolean = true;

// Array
let marks: number[] = [12, 34,5,6,76,];
let names: string[] = ["siddu", "shiva"];
let mixedArray = ["siddu", 23, true];

//  Tuples - Fixed Types in Fixed Positions
let person : [string, number] = ["siddu", 20];

// enum - a list of fixed choices
enum role {
    Admin,
    guest,
    user
}
let myRole: role = role.Admin;

// any- Anything Allowed, TypeScript stops checking the type.
let value: any = "siddu";
value = 34;
name = "shiva";

// unknown - I don't know the type yet
let data: unknown = "siddu";
if(typeof data === "string"){
    console.log(data.toUpperCase);
}

// void - No Value Returned ,Mostly used in functions.
function greet(): void {
  console.log("Hello");
}

// null - Intentionally the value is not defined or in future we can decide either the value should be stirng or null
let dataa: [string | null] 

// undefined 
let namee: undefined = undefined

// object 
let user: object= {
    name: "siddu",
    age: 45

}
