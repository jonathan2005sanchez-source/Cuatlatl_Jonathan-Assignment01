document.getElementById("submit-btn").addEventListener("click", checkAnswers);

function checkAnswers() {
  // Get user answers
  const q1 = document.getElementById("q1").value.trim().toLowerCase();
  const q2 = document.getElementById("q2").value.trim();
  const q3 = document.getElementById("q3").value.trim().toLowerCase();

  // Correct answers
  const answers = ["paris", "8", "purple"];

  // Store user answers for comparison
  const userAnswers = [q1, q2, q3];

  let resultsHTML = "";

  for (let i = 0; i < answers.length; i++) {
    if (userAnswers[i] === answers[i]) {
      resultsHTML += `<p>Question ${i + 1}: Correct!</p>`;
    } else {
      resultsHTML += `<p>Question ${i + 1}:  Incorrect. The correct answer is <b>${answers[i]}</b>.</p>`;
    }
  }

  document.getElementById("results").innerHTML = resultsHTML;
}
