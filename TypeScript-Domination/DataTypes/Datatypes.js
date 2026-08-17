// string
let name = "siddu";
console.log(name);
// number
let age = 45;
// boolean 
let condition = true;
// Array
let marks = [12, 34, 5, 6, 76,];
let names = ["siddu", "shiva"];
let mixedArray = ["siddu", 23, true];
//  Tuples - Fixed Types in Fixed Positions
let person = ["siddu", 20];
// enum - a list of fixed choices
var role;
(function (role) {
    role[role["Admin"] = 0] = "Admin";
    role[role["guest"] = 1] = "guest";
    role[role["user"] = 2] = "user";
})(role || (role = {}));
let myRole = role.Admin;
// any- Anything Allowed, TypeScript stops checking the type.
let value = "siddu";
value = 34;
name = "shiva";
// unknown - I don't know the type yet
let data = "siddu";
if (typeof data === "string") {
    console.log(data.toUpperCase);
}
// void - No Value Returned ,Mostly used in functions.
function greet() {
    console.log("Hello");
}
// null - Intentionally the value is not defined or in future we can decide either the value should be stirng or null
let dataa;
// undefined 
let namee = undefined;
// object 
let user = {
    name: "siddu",
    age: 45
};
export {};
//# sourceMappingURL=Datatypes.js.map