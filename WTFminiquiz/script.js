document.write ("Mini Quiz");

function checkAnswers() {
    (question : "1. What is the capital of USA???", answer: "Washington D.C"),
    (question : "2. What is 2+2", answer: "4"),
    (question : "3. What is the color of the sky?", answer: "Blue")


let Answers = [ document.getElementById("q1").value, 
                   document.getElementById("q2").value, 
                   document.getElementById("q3").value ];

let output = "<ol>";
for (let i=0 ;i <questions.length;i++) 
{

    let result = "";
    if(questions[i].answer.toLowerCase() === userAnswer[i].toLowerCase()){
        result = "Correct";
    } else {
        result = "Incorrect";
    }
    output += "<li>" + questions[i].question + "<br> Your Answer:" + userAnswer[i] + "<br> Resultss" + result + "</li><br>"
    console.log ("Question", questions[i].question);
    console.log ("User Answer:" , userAnswer[i]);
    console.log ("Results:",  result);
}

output += "</ol>";
document.getElementById("quizOut").innerHTML = output; 

}; 