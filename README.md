# JavaScript_Lab1
Lab1_Questions:

1- Create your first html file that contains any html tags.
2- Create an external JavaScript file and name it External.js ,then
define the following variables in this file
a- Three number variables (number1,number2,number3) with 
different values (3,2.9,0xff)
Note: define numbers with var Your firstName ,middleName 
and lastName variables
Note: define firstName with “ , middleName with ‘ and 
lastName with `(backtick).
b- Define a flag variable with value true
c- Finally print on log “This is the External JavaScript file”
3- Try the following assignments and write your comment
a- On External.js ->print the value of number1 on console 
before number1 definition line ?!
b- Create another internal script before external script in html
and print the value of number1?
c- Now add another internal script after external.js script in 
html file and print the same value?
Create javascript external file name it “functionsScript.js” and 
another
external file name it “ConsumingScript.js”
First file will contain all functions (all functions have an input and 
return
value) and the other js file will contain the calling of these functions
Assignment 1: testing hoisting and function’s call
1- Create function name it printVariables(value1,value2,value3) (as 
function declaration) takes 3 parameters and return them as an Array
a- try to console.log the values of value1,value2,value3 on 
consumingScript.js file ??
local variables are not accessible outside function’s block.
b- Try to call the function before definition line?
c- Call the function with 3 values then print the return
d- Try to call the function with less than 3 parameters 
printVariables(3,5) .
Then solve the problem of undefined variables
e- What if you call the function with too many parameters ? 
(more than 3)
Can you print them using (arguments)?
f- Define var localVar=3; testingVar=5; inside the function’s 
block Before calling the function try to console.log the values 
localVar and testingVar.??
g- In step f , call the function and try to print localVar and 
testingVar?
2- Repeat step 1 but define the function as function expression
Assignment 2: create the following functions:
4- Functions accept 2 variables and return the summation result 
Testing:
a- What if you insert less than 2 inputs?
solve this problem using ES6 feature.
b- What if the input is not a Number?
Solve this problem using your logic

# JavaScript_Lab2
Lab2_Questions:

Create javascript external file name it “functionsScript.js” and
another external file name it “consumingScript.js”
First file will contain all functions (all functions have an input and
return value) and the other one will contain the calling of these
functions
Now create the following functions:
1- Function accept a full name string and convert each letter of
first world to Capital and the remaining to small (Pascal
Case). //Example : 'the quick brown fox'
//Output : 'The Quick Brown Fox'
2- Function that accept a sentence and return the longest word
within the input
//Example : 'Web Development Tutorial'
//Output : 'Development'
3- Write a JavaScript Function that returns a passed string with
letters in alphabetical order
//Example : javascript
//Output : aacijprstv
4- Write a function that takes two arrays and returns an array of common
elements using filter() or a loop.
//Example: const arr1 = [1, 2, 3]; const arr2 = [2, 3, 4]; Returns [2, 3].
5- make Array of duplicates numbers and remove it in new array

# JavaScript_Lab3
Lab3_Questions:

1- create a web page that open existing small window and scroll it’s
content to the end .
Then from console try the following:
a- check if the small window still opened, close it.
b- Try to write your name on the small window document using
document.write (what is the problem).
2- Using document object method on the lecture’s HTML page
a- Find all images in page by two ways (document default
collection and document methods).
b- Find all options for City drop down list.
c- Find all rows(tds) for second table in page.
d- Find all elements that contain class name fontBlue and BGrey.
4- Display the date with time on the document title
(document.title) which changed every second to show time with
date.
Note: use .toLocalString() method of the Date Object.
Using location Object with simple HTML Form Page 
With get method, after clicking submit button show the 
Name and Age on page console as an object. 

# JavaScript_Lab4
Lab4_Questions:

1- SlideShow
Next button: will navigate to next image
Previous button: will navigate to previous image
Slideshow: start sliding images
Stop: will stop slideshow action
2- Complete the Student form demo to achieve the following
requirements.
All validations should be with error messages not alerts
1- StudentName should not be empty, should not be repeated in table and
always added to the table with first letter capitalized.
2- StudentGrade should be between 0:100 and use input text not number
3- Add filter dropDown List to filter table by Failed students (Grade<60) and
success students (Grade>60)
4- Add Sort dropDown List to sort table by Name or by Grade
Note : Every logical Error seen will cost you -5 grades (so test your code
carefully)
BONUS:
To Do List

# JavaScript_Lab5

Using ES6 create Class Engine with source property (Abstract class) and has private
static count property.
Create Car Class (inherits from Engine class)
Class constructor will take top, left and (image source reference) as source property
value
Class methods:
a- Top-> setter for top property
b- Left-> setter for left property
c- moveLeft-> to move the ball left on page
d- moveRight->to move the ball right on page
e- ChangeStyle-> method that take css style object as input to apply it on
the car.
f- Create moveCar(direction) that take the direction of moving car on
screen and the car will start moving until it reaches the page boundreis
left or right depending on the direction.
BONUS
Draw it in HTML

# JavaScript_Lab6

1- Your assignment contains 3 files: carmodule.js , flyingcarmodule.js
and base module.js
a- car.js module
contains Car class with the following properties:
a- Model (“pmw”,”picanto” and so on)
b- Year
c- toString Function that’s print car’s data(model,year)
Export the class
b- FlyCar.js module
contains FlyingCar class that inherits from car and has property
canFly(TRUE) FlyigCar Class has toString Function that call parent
function and prints “I
can Fly”
Export the class
c- Base.js module
Create FlyinCar object and calling toString function
2- use Fetch method to get data from this api
https://jsonplaceholder.typicode.com/users
To get data asynchronously from the API and display the Result on
HTML table
a- You don’t know columns’ names in code so keep your code generic
b- Display the following Coulmns in table
1- UserName
2- email
3- Company Name
4- Address geo (address GeoLocation)
5- show users posts’ titles as ul list in this column and show how
many comments are made by each post.