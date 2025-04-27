 printVariables = function(value1 , value2 , value3 = 0) {
    
     localVar = 3;       
     testingVar = 5;
    const extraArgs = [];

    if (arguments.length > 3) {
        for (let i = 0; i < arguments.length; i++) {
            extraArgs.push(arguments[i]);
        }  
        return extraArgs;
}     
    return [value1, value2,value3]
}
    
function printVariables (value1 , value2 , value3 = 0) {
    
    localVar = 3;       
    testingVar = 5;
   const extraArgs = [];

   if (arguments.length > 3) {
       for (let i = 0; i < arguments.length; i++) {
           extraArgs.push(arguments[i]);
       }  
       return extraArgs
}     
   return [value1, value2,value3]
}
//4- Functions accept 2 variables and return the summation result
//b- What if the input is not a Number?
//====> THE ANSWER IS =====> there will not be defined 
//Solve this problem using your logic
//a- What if you insert less than 2 inputs?
//====> THE ANSWER IS =====> it will be undefined and to solve it we should use default values 

function sums (num1 = 0, num2 = 0) {
    if(isNaN(num1) == true || isNaN(num2) == true)
    {
        var result =Number(num1) + Number(num2);
         console.log("YOU DIDN'T ENTER A NUMBER:");
         return false;
    }
    return num1 + num2 ;    
};







