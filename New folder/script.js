// fetch the student data from the JSON file or URl
// think of it as js way of saying "fetch, boy"
// returning something called "Promise"
// "Promise is like a boc that will eventually contain the data you requested"
fetch("student.json")
    .then(response => response.json())
    .then(data =>
        ( const container = document.getElementById('student-list');

        data.students.forEach(student => {
            const p = document.createElement("p"); 

            p.textContent = '${student.name} (${student.major}) - Grade: ${student.grade}' ;

            container.appendChild(p);

        })


    ))
.catch(error => console.error ('error:', error));
