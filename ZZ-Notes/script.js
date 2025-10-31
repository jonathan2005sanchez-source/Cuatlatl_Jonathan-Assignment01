// // Ok so lets break this down to J, "doc.write pretty much
// // writes to the html document directly "
// document.write("Hello, World!<br>");

// // ok so adding this function with a greet is like a base 
// // the doc.werite inside is another "line" of code
// // its like a template, that can be reused simple with the lines 
// // greet();
// function greet () {
//     document.write("Hello, World from function! this uses greet<br>");
// }


// greet();
// greet();

// greet();

// function greet1() {
//     document.write("This is a title using Greet1<br>");
// }

// greet1(); 

// function getGreeting() {
//     return "Hello, World from return type function!<br>";
// }

// console.log(getGreeting());
// // Above line is same as this line
// console.log("hello World from return type function<br>")
// // using return type function with document.write...
// document.write(getGreeting());

// greet();


// // so this one can us its function with parameter/input and without return type
// function showSquare(num) {
//     document.write("Square of " + num + ' is ' + (num*num) + '<br>');
// }

// showSquare(5); 
// // it will excute the function showSquare with A NUMBER Ex. 5, 8, 3, etc.
// showSquare(8);
// showSquare(3);
// showSquare(12);

// // Fusion????

// // setting a function is like setting a base 
// function getmultiplication(a,b) {
//     return a * b;
// }
// // this is like the computer answering the function with the numbers 5 and 6
// let result = getmultiplication(5,6);

// // using console.log and is like a stand alone line
// console.log("multiplication is " + result);

// // adding document.write is like writing to the html document and showing the result   
// // using multiplication of 5 and 6 as an example + result 
// document.write("multiplication of 5 and 6 is " + result + '<br>');

// document.write("multiplication of 7 and 8 is " + getmultiplication(7,8) + '<br>');
// document.write("multiplication of 9 and 9 is " + getmultiplication(9,9) + '<br>');
// // so its like fusion cuz your using Function getmultiplication with let result
// // and using document.write to show the result in the html document

// // JavaScript for loop
// for (let i = 1; i <= 5; i++) {
//     document.write("This is line number " + i + '<br>');
// }

// // base
// function getaddition(x,y) {
//     return x + y;
// }
// // results
// let result1 = getaddition(5,6);
// // writes it in the console
// console.log("addition is " + result1);
// // writes it in the html document
// document.write("addition of 5 and 6 is " + result1 + '<br>');

// // Again but subtraction

// // base
// function getsubtraction(m,n) {
//     return m - n;
// }
// // results
// let result2 = getsubtraction(10,5);
// // writes it in the console
// console.log("subtraction is " + result2);
// // writes it in the html document
// document.write("subtraction of 10 and 5 is " + result2 + '<br>');
// // two ways of writing the result in the html document, using result2 or using the function directly
// document.write("subtraction of 20 and 8 is " + getsubtraction(20,8) + '<br>');

// // now for division

// // base
// function getdivision(p,q) {
//     return p / q;
// }
// // results
// let result3 = getdivision(10,5);
// // writes it in the console
// console.log("division is " + result3);
// // writes it in the html document
// document.write("division of 10 and 5 is " + result3 + '<br>');
// // two ways of writing the result in the html document, using result3 or using the function directly
// document.write("division of 20 and 8 is " + getdivision(20,8) + '<br>');

// greet();
// greet1();

// // So "Sal" is just a function name I made up, with doc.write inside sets s "command" to write in the html document
// // then I just call the function Sal(); and it writes it in the html document
// function Sal () {
//     document.write("My name is Jonathan Cuatlatl<br>");
// }

// Sal();



function runForLoop () {
   let text = "Counting from 1 to 5 using for loop:";

   for (let i=1; i<=5; i++) 
    {
       text += i + " ";
   }
   document.getElementById("output").innerHTML = text;
}
// text = "Counting from 5 to 1 using while loop: 1 2 3 4 5 <br>";

// Now using while loop

function runWhileLoop () {
    let text2 = "Counting from 1 to 5 using while loop: ";
    let i = 1;
    while (i <= 5) {
        text2 += i + " ";
        i++;
    }
   document.getElementById("output").innerHTML = text2;
}

// now for runDoWhileLoop

function runDoWhileLoop () {
    let text5 = "Counting using do-while loop: ";
    let i = 1;
    do {
        text5 += i + " ";
        i++;
    } while (i <= 20);

    document.getElementById("output").innerHTML = text5;
}

// Now run ifElse

function runIfElse() {
    let text1 = "Check Even or Odd Numbers:<br>";
    for(let i=1;i <=5;i++) {

        if (i % 2 === 0) { 
            text1 += i + "is even<br>"   
        }  else { 
            text1 += i + "is odd<br>"
        }

    } 

    document.getElementById("output").innerHTML = text1;
}
       

let text1 = "checking next values for even and off (10 to 15): <br>"

// Now for runSwitch

function runSwitch() {
   let grade = "";
   let message = "";

   switch(grade){
        case "A":
        message = "Excellent Well done, wahtever";
     

        case "B":
            message= "Good job!!!";
          

        case "C":
            message= "DO BETTER "
         

        case "D":
            message= "Life tough"
           

        default:
            message= "No recongnized grade"

        
   }
    document.getElementById("output").innerHTML = text6;
}