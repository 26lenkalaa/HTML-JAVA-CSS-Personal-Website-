//Variables

//Let allows you to define variables after initialization
let adultAge = 18;

//Constants can not be changed after initialization
const piValue = 3.14;


//Primitive Data Types
let name = 'Abhi' //String Literal
let age = 14 //Number Literal-Tokyo Night

let newCoder = true //Boolean Literal
let favoriteColor = null //Null 
let code = undefined //Undefined

//Arrays
let childAge = [4,5,6,7, 9,10 ,[11, 12, 13, 14, 15, 16, 17, 18, 19]];
childAge[4] = 8; 
childAge.push(11);
let firstAge = childAge.shift();

//Object Literals
const person = {
    name: 'Abhi',
    age: 14,
    grade: 9,
    name: 'Abhi',
    age: 14,
    grade: 9,
    address: { // Objects can  have objects inside of them 
        city: "East Granby",
        country: "USA",
        state: "Connecticut",
    }
}   

const { grade, address } = person;

const JSONperson = JSON.stringify(person);

console.log(grade, address);
console.log(JSONperson);

let key = "age"

//Fuctions
function createFuctions(){
    
}





//Return Statements
console.log(firstAge);
console.log(childAge);
console.log(person.age);
console.log(person[key]);
console.log(person.address);
console.log(piValue);
console.log(name);
console.log(age);
console.log(childAge[14]);
console.log(newCoder);
console.log(favoriteColor);
console.log(code);

