
interface Person{
    name: string;
    age: number;
    salary?: number
}
// object creation 
const person: Person = {
    name: "siddu",
    age: 20
};
console.log(person);

// Interface with Functions
interface user{
    name: string,
    greet() : void
}
const User: user = {
    name : "siddu",
   greet(){
       console.log("Welocome");
   },
}
console.log(User);
User.greet();

// Readonly Properties
interface person1 {
    name : string,
    age : number,
    readonly salary: number
}
const Person1 : person1 = {
    name: "siddu",
    age: 20,
    salary : 45000
};
console.log(Person1);
Person1.name = "shiva";
// Person1.salary = 40000; 

// Interface with Function Parameters
interface person2 {
    name: string,
    age: number
};
function getDetails(obj: person2) : void{
    console.log(obj.name);
    console.log(obj.age);
}
getDetails({
    name : "shiva",
    age : 20
});
console.log(getDetails);


// Interface with Arrays
interface Fruits {
    [index : number] : string;
}
const fruits : Fruits = [
    "Apple",
    "Banana",
    "kiwi"
]
console.log(fruits);

// Interface with Classes
interface Animal {
    name: string
    age: number
    makenoise() : void;
}
class Dog implements Animal{
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age;
    }
    makenoise(): void {
        console.log("barking");
    };
}
let b1 = new Dog("puppy",20);
console.log(b1);
b1.makenoise();


// Interface inheritance
interface Personn {
    name: string;
}
interface Employe extends Personn {
    salary: number;
}
const empp: Employe = {
    name: "Siddu",
    salary: 50000
};