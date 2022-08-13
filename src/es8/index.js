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
        if (true){
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

// Async Await exercise
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}
const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(error) {
        console.log(error); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}
buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero
