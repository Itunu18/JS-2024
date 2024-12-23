// global execution context
let msg = ("Hello, World");
console.log(msg);

// fuction execution context
function logmsg() {
    console.log(msg);
}

/*eval fuction
**eval is not prefered in ES6+
**eval(console.log("Hello, World"));
*/
let animal, isHungry, Age; 

    animal = "Dog";  //sting
    isHungry = true; // boolen
    Age = 12; // number 

    console.log( "My " + animal + " is " + Age)
    if(isHungry) {
         console.log("My " + animal + " is hungry")
         }
         if (isHungry) {
            console.log("It's " + isHungry + ", My " + animal + " is hungry")
         }
        
       // variable mutation
       Age = 13;
       isHungry = false;
       // this will not run because it does not meet the condition. 
                /* if(isHungry) {
                **console.log("My " + animal + " is hungry")
                 }
                */
    

    //var
    var testVar = 2; //declaration & assignment
    testVar = 3;  // assignment (mutation)
    var testVarB = 3; // declaration & asignment
    var testVar = 3; // re-declaration & assigment 

    //let
    let testVarC = 4;
     //let testVarc = 5;
     testVarVC = 5;
     // cannot re-declare a let 

     //const
     const testVarD = 6;
    //  testVarD = 8;
     // cannot re-assign or declare a const 

let testVarE; // undefine
  testVarE = null; // variable is empty 
  console.log(testVarE)

// var hoisting
console.log(add);
add = 3 + 1;
console.log(add);
var add;
console.log(add);

// function hoisting
console.log(addTwo(3 + 1));
function addTwo(a,b) {
    return a + b;
}

// let declaration
let count; //declaration 
count = 0; // assignment

let count2= 1; // declaration and assignment 

// const declaration
const count3= 2; // declaration and assignment you cannot do it seperately in const

//  var declaration #var is a default 
count4= 3;  // or var count4= 3;

console.log(count, count2, count3, count4);


