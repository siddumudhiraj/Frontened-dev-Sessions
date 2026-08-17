// Basic Example 
function basic(value) {
    return value;
}
console.log(basic('hello'));
console.log(basic(56));
// Type inference
console.log("siddu");
// Generic Arrays
// let numbers: number[] = [1,2,3,4]; normal
let number = [1, 23, 4, 5];
// Generic with multiple Types
function combine(first, second) {
    return [first, second];
}
let res = combine("siddu", 20);
console.log(res);
const basee = {
    data: "Hello"
};
console.log(basee);
// Generic classes
class Storage {
    item;
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
}
let storage = new Storage("siddu");
storage.getItem();
const obj1 = {
    name: "siddu"
};
console.log(obj1.name);
const obj2 = {
    name: "siddu",
    age: 20
};
console.log(obj2);
const obj3 = {
    name: "siddu",
    age: 20
};
const obj4 = {
    name: "siddu"
};
console.log(obj4);
const obj5 = {
    age: 20
};
console.log(obj5);
const studentmarks = {
    maths: 45,
    science: 59,
    physics: 67
};
console.log(studentmarks);
let color;
color = "Blue";
console.log(color);
let col;
col = "Blue";
console.log(col);
let ress;
ress = "siddu";
console.log(ress);
// ReturnType<T>- Gets the return type of function
function getUser() {
    return {
        name: "Siddu",
        age: 22
    };
}
let user = {
    name: "Rahul",
    age: 25
};
console.log(user);
export {};
// 
//# sourceMappingURL=app.js.map