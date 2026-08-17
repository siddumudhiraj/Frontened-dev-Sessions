class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    details() {
        console.log(`this is ${this.name} and age is ${this.age}`);
    }
}
let s1 = new Student("siddu", 22);
s1.details();
console.log(s1.name);
// TypeScript provides a shorter syntax.
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
const p1 = new Person("shiva");
console.log(p1.name);
// Getters
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    get Area() {
        return 3.14 * this.radius * this.radius;
    }
}
const c1 = new Circle(3);
console.log(c1.Area);
// Setters
class Person1 {
    age = 20;
    set updateAge(age) {
        this.age = age;
    }
    get newAge() {
        return this.age;
    }
}
let age = new Person1();
age.updateAge = 22;
console.log(age.newAge);
export {};
//# sourceMappingURL=class.js.map