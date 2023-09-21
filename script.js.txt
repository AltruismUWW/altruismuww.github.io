const password = "your_password"; // Replace with your chosen password
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

function checkPassword() {
    const guess = document.getElementById("guess").value;
    if (guess === password) {
        const name = nameInput.value;
        if (name) {
            message.innerHTML = `Congratulations, ${name}! You guessed the password correctly.`;
        } else {
            message.innerHTML = "Please enter your name.";
        }
    } else {
        message.innerHTML = "Incorrect password. Try again.";
    }
}