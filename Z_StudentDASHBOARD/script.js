document.write("abc")

let student = {
    {name: "Robert", grade: 91},
    {name: "lilith", grade: 91},
    {name: "John", grade: 30},
    {name: "Gary G.", grade: 30},
    {name: "Jennifer", grade: 91},
};

//console.log(student.length)

let output = "<ul>";

for(let i = 0; i < student.length; i++) {

    let status = "";

    if(student[i].grade >= 50){
        status = "Passed"
    } else {
        status = "failed"
    }

    output += "<li>" + student[i].name + "- Grade: " + student[i].grade + "-" + status + "</li>";

    console.log{"student:", student[i].name};
    console.log{"grade", student[i].grade}
    console.log{"status", status}

}

output += "</ul>"

document.getElementById("studentList").innerHTML = output;

document.write( "AOBJFIOJQNOJFN" )