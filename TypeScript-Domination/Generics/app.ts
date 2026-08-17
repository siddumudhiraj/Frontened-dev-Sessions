// Basic Example 
function basic<T>(value: T) : T{
    return value;
}
console.log(basic<string>('hello'));
console.log(basic<number>(56));
// Type inference
console.log("siddu");

// Generic Arrays
// let numbers: number[] = [1,2,3,4]; normal
let number: Array<number> = [1,23,4,5];

// Generic with multiple Types
function combine<T, U>(first : T, second: U){
    return [first,second];
}
let res = combine("siddu", 20);
console.log(res);

// Generic Interfaces
interface base<T> {
    data:T
}
const basee: base<string> = {
        data: "Hello" }; 
        console.log(basee);

// Generic classes
class Storage<T> {
    item: T;
    constructor(item: T) {
        this.item = item;
    }
    getItem(): T {
        return this.item;
    }
}
let storage = new Storage("siddu");
storage.getItem();

// Utility types
interface user{
    name: string;
    age: number;
}
// 1.Partial - makes all properties optional
type partial = Partial<user>;
const obj1: partial = {
    name: "siddu"
}; console.log(obj1.name);

// 2.Required - makes every property manddatory
type require = Required<user>;
const obj2: require= {
    name: "siddu",
    age: 20
}; console.log(obj2);

// 3. Readonly- makes every property readonly
type read = Readonly<user>;
const obj3: read= {
    name: "siddu",
    age: 20
}; 
// obj3.name = "harsha"; error

// 4.Pick<T, keys> - select only certain properties
type pick = Pick<user, "name">;
const obj4: pick= {
    name: "siddu"
}; console.log(obj4);

// 5. Omit<T, keys> - opposite of pick, removes selectes properties
type omit = Omit<user, "name">;
const obj5: omit= {
    age: 20
}; console.log(obj5);

// 6. Record<K,T> - creates an object 
type marks = Record<string, number>;
const studentmarks: marks = {
    maths: 45,
    science: 59,
    physics: 67
}; console.log(studentmarks);

// 7.Exclude - Remove tyes form union
type Colors = "Red"| "Green"| "Blue";
type newcolors = Exclude<Colors, "Green">;
let color: newcolors;
color = "Blue"; console.log(color);
// color = 'Green'; console.log(color); Error

// 8. 8. Extract<T,U> - Opposite of Exclude. Keeps only matching types.
type Color = "Red"| "Green"| "Blue";
type newcolor = Extract<Color, "Green" | "Blue">;
let col: newcolor;
col = "Blue";
console.log(col)

// NonNullable<T> - Removes null, undefined
type Data = string | null | undefined;
type safeData = NonNullable<Data>;
let ress :safeData; ress = "siddu";
console.log(ress);

// ReturnType<T>- Gets the return type of function
function getUser() {
    return {
        name: "Siddu",
        age: 22
    };
}
type UserType = ReturnType<typeof getUser>;
let user: UserType = {
    name: "Rahul",
    age: 25
};
console.log(user);

// 