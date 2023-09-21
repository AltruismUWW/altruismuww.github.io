const password = "warhawk"; // Replace with your chosen password
const nameInput = document.getElementById("name");
const message = document.getElementById("message");

const image = document.getElementById("display-image");
const imageContainer = document.getElementById("image-container");

image.src = "image.jpg";

// Apply CSS styles for aesthetics (you can customize these styles)
imageContainer.style.textAlign = "center";
image.style.maxWidth = "100%";
image.style.height = "auto";

function checkPassword() {
    const guess = document.getElementById("guess").value;
    if (guess === password.ToLowerCase()) {
   
	message.innerHTML = `Congratulations, ${name}! You guessed the password correctly! Please visit me in the UC and tell me the password to claim your prize! I will be in the UC on Tuesdays and Thursdays from 11AM-1:45PM! If I am not there; please email me at MEYERBJ06@uww.edu`;
    } else {
        message.innerHTML = "Incorrect password. Try again.";
    }
}