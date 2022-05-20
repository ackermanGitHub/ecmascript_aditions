const obj = {
    name: "julio",
    age: 19,
    country: "CU",
};

//let {country, ...all} = obj;
//console.log(all);

const obj1 = {
    name: "julio",
    age: 19,
}
const obj2 = {
    ...obj1,
    country: "CU",
}
console.log(obj2);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"))
            : reject(new Error("Test Error"))
    });
};
helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalizó"))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);