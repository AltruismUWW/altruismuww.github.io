const password = "password"; // Replace with your chosen password
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

function checkPassword() {
    const guess = document.getElementById("guess").value;
    if (guess === password) {
   
	message.innerHTML = `Congratulations, ${name}! You guessed the password correctly! Please visit me in the UC and tell me the password to claim your prize! I will be in the UC on Tuesdays and Thursdays from 11-2! If I am not there; please email me at MEYERBJ06@uww.edu`;
    } else {
        message.innerHTML = "Incorrect password. Try again.";
    }
}