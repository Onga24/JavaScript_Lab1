//a- try to console.log the values of value1,value2,value3 on consumingScript.js file ??
// console.log("Trying to access parameters directly:");
// console.log("value1:",  value1); 
// console.log("value2:",  value2); 
// console.log("value3:",  value3); 
//====> THE ANSWER IS =====> undefined and to solve it usinhg default values




//b- Try to call the function before definition line?
console.log("Call the function before definition in code:");
console.log(printVariables())
  
    
//c- Call the function with 3 values then print the return
var normalResult = printVariables(1, 2, 3);
console.log("Normal result:", normalResult); 

//d- Try to call the function with less than 3 parameters
console.log(printVariables(3,5));
//Then solve the problem of undefined variables all  we need to do 
//====> THE ANSWER IS =====> to add a default values like null or any number


//e- What if you call the function with too many parameters ? (more than 3)
console.log(printVariables(1,2,3,5)); 
// ====> THE ANSWER IS =====> it will print only 3 Variables

//f- Define var localVar=3; testingVar=5; inside the function’s block Before calling the function try to console.log the values localVar and testingVar.?

// console.log(localVar);    // undefined
// console.log(testingVar);  // undefined

//g- In step f , call the function and try to print localVar and testingVar? 
// =====> THE ANSWER IS REMOVING THE VAR TO MAKE IT GLOBALE VARIABLE

//2- Repeat step 1 but define the function as function expression
//====> THE ANSWER IS =====> there will not be Hoisting

//b- What if the input is not a Number?
console.log(sums(2,5));
//====> THE ANSWER IS =====> there will not be defined 

