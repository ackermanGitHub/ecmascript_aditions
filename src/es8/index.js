const data = {
    frontend: "Julio",
    backend: "Sergio",
    design: "Lopez",
    newWorker(profession, subject) {
        this[profession] = subject;
    }
}
data.newWorker("dataAnalist", "Quiros");
console.log(data);
const entries = Object.entries(data);
console.log(entries); // Convert an object to an array that contains arrays in order with the atribute name and value of each atribute.
console.log(entries.length); // This aloud us to know how many elements are in an object in a confortable way.

const data1 = {
    frontend: "Julio",
    backend: "Sergio",
    design: "Lopez",
}
const values = Object.values(data1);
console.log(values); // Returns an array that contains the values of each atribute, not the atribute names.

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, " ------"));
console.log("food".padEnd(12, " -------"));

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        if (false){
            setTimeout(() => resolve("Hello World"), 3000);
        } else {            
            reject(new Error("Test Error"));
        }
    })
}
const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}
helloAsync();
const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}
anotherFunction();