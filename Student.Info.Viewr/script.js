window.addEventListener("DOMContentLoaded", loadStudents);

function loadStudents() {
    fetch("student.json")
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("studentList");
            container.innerHTML = ""; // clear previous content if any

            data.students.forEach(student => {
                const studentDiv = document.createElement("div");
                studentDiv.innerHTML = `
                    <p><strong>Name:</strong> ${student.name}</p>
                    <p><strong>Major:</strong> ${student.major}</p>
                    <p><strong>Grade:</strong> ${student.grade}</p>
                    <hr>
                `;
                container.appendChild(studentDiv);
            });
        })
        .catch(error => {
            console.error("Error loading student data:", error);
        });
}
