window.onload = function() {

  const students = [
    { name: "Alice Johnson", grade: 85 },
    { name: "Brian Smith", grade: 72 },
    { name: "Catherine Lee", grade: 59 },
    { name: "Daniel Brown", grade: 91 },
    { name: "Eva Martinez", grade: 66 }
  ];

  const showButton = document.getElementById("showButton");
  const studentList = document.getElementById("studentList");

  function displayStudents() {
    studentList.innerHTML = ""; // clear previous content

    students.forEach(student => {
      const div = document.createElement("div");
      const status = student.grade >= 70 ? "Pass" : "Fail";
      div.textContent = `${student.name} - Grade: ${student.grade} - Status: ${status}`;
      studentList.appendChild(div);
    });
  }

  // Attach click event to button
  showButton.addEventListener("click", displayStudents);
};
