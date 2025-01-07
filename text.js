console.log("hello!")


let now = 2021;
let fidoYear = 2008;
let fullAge = 15;
let isFullAge = (now - fidoYear) >= fullAge // false 
// let isFullAge = (now - fidoYear) <= fullAge // true

 console.log(isFullAge);

 let fidoAge = (now - fidoYear);

 let AgeAge = 9;
 let Average = (fidoAge + AgeAge)/2;
 console.log(Average);

 let x,y;
 x = y = (6 + 2) *5 - 7;
 console.log(x, y);

 x = x * 5;
 console.log(x);

// coding challege
 let kidoAge = 12;
 let bidoAge = 9;
 let goatYear = 7;
 let puppYear = 5;

 let kidohunmanage = (kidoAge * goatYear);
 let bidohunmanage = (bidoAge * puppYear);
 console.log(kidohunmanage, bidohunmanage);

 let iskidoOlder = kidohunmanage > bidohunmanage; // true
 console.log(iskidoOlder);

// let string1, string2, string3;

// string1 = " Hi! ";
// string2 = " I'm new here ";
// string3 = " My name is itunu ";

// console.log(string1 + string2 + string3);
// console.log(string3.length);


// string concatenation
let string1 = "my dog name " + " is " + "bones";
console.log(string1)

let string2 = "my dog name";
string2 += " is ";
string2 += "bones";
console.log(string2);

let string3 = "my dog name";
string3 = string3.concat(" is ","bones");
console.log(string3);

//multi-line string 
console.log("frist line 1\n" + 
    "second line2");

// template literals and interpolation
let string4 = "bones"
let string5 = (`my dog name is ${string4}`);
console.log(string5); // can't get the correct qoute

let num1 = 5;
let num2 = 9.87543;
let num3 = 10/3;

console.log(num3)

let str = "566ttt";
str = parseInt(str);
console.log(str);



// If/ Else statement
const petName = "Bingo";
let mood = "sad";
if (mood === "happy") {
    console.log(petName + 'is a ' + mood + ' dog')
} 
else {
    console.log(petName + " will be happy soon");
    
}

let isHungry = true;
if (isHungry) {
    console.log(petName + " is hungry");
}
else {
    console.log(petName + "will hopefully eat soon");
    
}

let boluWeight = 45;
let bolaWeight = 20;
if(boluWeight > bolaWeight) {
    console.log("bolu Weight is grather than bola Weight");
    
}
else if (boluWeight === bolaWeight) {
    console.log("bolu and bola weight the same"); 
}
else{
    console.log("bola weight is grather than bolu Weight");
}

// for array and lenght
let petNames2 = ["Puppy", "Moana", "Rex"]
let age = new Array(12, 9, 4);
console.log(petNames2[2]); // specific item in an array
console.log(petNames2.length); // total items in the array
console.log(petNames2); // whole array
console.log(petNames2[0]); // first items in the array

console.log(petNames2[petNames2.length -1]); // last item in an array 
petNames2.forEach(i => console.log(i));


// basic array methods
let rex = ["Rex","Dinosaur","Carnivore", 680000000]
rex.push("green") // to add a item at the end of the array
rex.pop() // to remove the last item from the arrray 
// console.log(rex.pop()); to show the last item that was removed 
rex.shift() // to remove the first item
rex.unshift('Rex') // to retuen the first item and you can also add more items 
console.log(rex);
console.log(rex.indexOf(680000000)); // to find a specific index 

// for object
const pets = {
    rat: 'Sam',
    cat: 'Bob'
}
// destructuring assignment
const {rat, cat}= pets; 
// console.log(rat);
// console.log(cat);

let pet = new Object("Fido")
pet.name = "Fido";
console.log(pet);

// basic object method 
const cat1 = {
    name: 'whisker',
    age: 4,
    type: 'calico'
}

// dot notaion 
console.log(cat1.name);

// bracket notation
console.log(cat1["name"]);

cat1.sayHi = function() {
    console.log("MEOWW");
}
console.log(cat1);
cat1.sayHi()

// exercise
const me = {
    name: "Itunu",
    age2: 23,
    city: "lagos",
    favoriteFood: "noddles"
}
console.log(me.name);
console.log(me["age2"]);

me.saysHi = function() {
    console.log(`Hi my  name is ${this.name} and i am ${this.age2} years old`);
}
console.log(me);
me.saysHi()
    

// loops 

for (let i = 0; i < 10; i++) {
    console.log("i want to eat " + i + " donut");
}

let obj = {
    name: "Fred",
    age: 35,
    city: "New York"
}
for (const property in obj) {
    console.log(property, obj[property]); 
}

const num4 = [1, 20, 50, 60, 7]
for (const item of num4) {
    console.log(item);
    
}

// for while loop

let ind = 0; 
   while (ind < 10) {
    console.log("i want to eat " + ind + " donut");
    ind++;
}

// to break 
for (let i = 0; i < 10; i++) {
    if (i === 6) {break;}
    console.log("i want to eat " + i + " donut");

    // continue 
}
for (let i = 0; i < 10; i++) {
    if (i === 6) {continue;}
    console.log("i want to eat " + i + " donut");
}

// function declaration
function calculateAge(birthYear) {
return 2024-birthYear
}
let babAge = calculateAge(2009);
let didAge = calculateAge(2016);
let fexAge = calculateAge(0);

console.log(babAge);
console.log(didAge);
console.log(fexAge);


// Arrow function
const years = [1990, 1984, 1992, 1920]
const age9 = years.map(el => 2020 - el) // doesn't work well with this

const age5= years.map(function (el) { return 2020 - el; });


// scope
let example = [1, 2, 3, 5] // Global scope

function example2() {  // function scope 
    const example3 = "test";
    return example3;
    // if () {
    //     // two level deep   // block function  
    // }
}
    console.log(example2());

    // closure
    function retirement(retirementAge) {
        const a = (' years left untill retirement')

        return function(yearOfBirth) {
            let age9 = 2021 - yearOfBirth;
            console.log((retirementAge = age9) + a);  
        }
    }
    let retirementus = retirement(65);
    retirementus(1990);


    // call- backs
    let array7 = [1, 2, 3, 4, 5]

    function higherOder(someArray, callback) {
        for (let i of someArray) {
            callback(i);
        }
    }
    function LogNumber(Num) {
        console.log(Num);   
    }
    higherOder(array7, LogNumber);


    // foreach method
    let arr1 = ['a', 'b', 'c'] 
    arr1.forEach(x => console.log(x)) 
// map method
let arr2 = [1, 4, 16]

let map1 = arr2.map(x => x * 2) 

console.log(map1);

// filter method
const words = [ 'spray', 'limit', 'elite', 'exiburate', 'government', 'destruction']
const result = words.filter(word => word.length > 6)
console.log(result);

// reduce method
const arr3 = [1, 2, 3, 4]
const reducer = (result, currentValue) => result + currentValue;

console.log(arr3.reduce(reducer));

const arr4 = ['welccome', 'to', 'the', 'jungle']
const reducer1 = (result, currentValue) => result + " " + currentValue;

console.log(arr4.reduce(reducer1));


// sort method
const months = [ 'march', 'jan', 'feb', 'dec']
months.sort();

console.log(months);

const arr5 = [1, 30, 31, 10000, 2, 5]
arr5.sort();

console.log(arr5);

// speard operator
const familyMelin = ['biley', 'josh', 'sam']
const familyZombie = ['bob', 'sean', 'samuel']
const bigFamily = [...familyMelin, ' lilly ', ...familyZombie]

console.log(bigFamily);
