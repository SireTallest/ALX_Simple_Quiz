function checkAnswer() {
    const correctAnswer = "4";
    const checkedRadio = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = checkedRadio.value;
    const feedback = document.getElementById('feedback');

    if (!checkedRadio) {
        feedback.textContent = "Please, select an answer";
        feedback.style.color = "orange";
        return;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!"
        feedback.style.color = "red";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);