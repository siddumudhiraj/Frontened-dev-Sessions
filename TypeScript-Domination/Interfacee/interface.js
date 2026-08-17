// object creation 
const person = {
    name: "siddu",
    age: 20
};
console.log(person);
const User = {
    name: "siddu",
    greet() {
        console.log("Welocome");
    },
};
console.log(User);
User.greet();
const Person1 = {
    name: "siddu",
    age: 20,
    salary: 45000
};
console.log(Person1);
Person1.name = "shiva";
;
function getDetails(obj) {
    console.log(obj.name);
    console.log(obj.age);
}
getDetails({
    name: "shiva",
    age: 20
});
console.log(getDetails);
const fruits = [
    "Apple",
    "Banana",
    "kiwi"
];
console.log(fruits);
class Dog {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makenoise() {
        console.log("barking");
    }
    ;
}
let b1 = new Dog("puppy", 20);
console.log(b1);
b1.makenoise();
const empp = {
    name: "Siddu",
    salary: 50000
};
export {};
//# sourceMappingURL=interface.js.map