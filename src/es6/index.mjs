function newFunction(name, age, country){
    var name = name || "julio";
    var age = age || 19;
    var country = country || "CU";
    console.log(name,age,country);
}
newFunction();

// es6
function newFunction2(name = "julio", age = 19, country = "CU"){
    console.log(name, age, country);
}
newFunction2();
newFunction2("Pepino", "20", "CU");

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world; 
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "Qui conseguith Teholiru Hamehamehaaa. Ipsum ver duis yet minima \n"
+ "otra frase epica que necesitamos."
let lorem2 = `Otra frase epica qie necesitamos
ahora es otra frase epica
`;
console.log(lorem);
console.log(lorem2);

let person = {
    "friend": "morell",
    "age": 19,
    "country": "CU",
}
console.log(person.friend, person.age);
let { friend } = person;
console.log(friend);

let team1 = ["Julio", "Morell", "Miguel"];
let team2 = ["Pepino", "Jorge", "Fabio"];
let education = ["Platzi", ...team1, ...team2];
console.log(education);

{ // block scope
    var globalVar = "Global Var";
    console.log(globalVar);
}
{ // block scope
    let globalLet = "Global Let";
    console.log(globalLet);
    console.log(globalVar);
}
console.log(globalVar);
//console.log(globalLet); // This one give an error

const a = 5; // cant´t be reasign
console.log(a+4); // but can be edited when is called

let guy = "Julio";
let age = 19;
// es5
obj1 = {name: "Julio", age: 19 };
// es6
obj2 = { guy, age};
console.log(obj2);

const names = [
    {name: "Morell", age: 19},
    {name: "Yumisisleidis", age: 20},
]
let listOfNames = names.map(function (item){
    console.log(item.name);
})
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    console.log(name, age, country);
}
listOfNames3("julito", 19, "CU");
const square = num => num * num;
console.log(square(3));

// VER MAS TARDE ***IMPORTANTE***
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Promess Accept");
        } else {
            reject("Promess Declined");
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("hello"))
    .catch(error => console.log(error));

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA += valueA;
        this.valueB += valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new Calculator();
console.log(calc.sum(2,2));

// Importar función desde otro fichero module
//import hello from './module.mjs';
//console.log(hello())

// Generator Function
function* helloWorld() {
    if (true) {
        yield "Hello, ";
    }
    if (true) {
        yield "World";
    }
}
const genereitorHello = helloWorld();
const genereitorHello1 = helloWorld();
console.log(genereitorHello1.next().value);
console.log(genereitorHello1.next().value);
console.log(genereitorHello1.next().value);
console.log(genereitorHello.next().value);
console.log(genereitorHello.next().value);
console.log(genereitorHello.next().value);