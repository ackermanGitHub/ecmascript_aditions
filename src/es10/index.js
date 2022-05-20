let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2));

let array1 = [1,2,3,4,5];
console.log(array1.flatMap(value => [value, value * 2]));

let hello = "           helloworld";
console.log(hello);
console.log(hello.trimStart());

let hello1 = "hello World              ";
console.log(hello1);
console.log(hello1.trimStart());

/* 
try {

} catch {
    error
}
 */

let entries = [["name", "Julio"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbl = "My Symbol";
let symbol = Symbol(mySymbl);
console.log(symbol.description);