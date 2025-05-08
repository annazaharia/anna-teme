const mainContainer = document.createElement("div");
mainContainer.style.display = "flex";
mainContainer.style.justifyContent = "flex-start";
mainContainer.style.alignItems = "flex-start";
mainContainer.style.width = "100%";
mainContainer.style.gap = "20px";

const container = document.createElement("div");
container.style.position = "relative";
container.style.display = "inline-block";

const image = document.createElement("img");
image.setAttribute(
  "src",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzYLNVmDO7JTd2W2J_jHpBVsVlJacfWloUw&s"
);
image.style.width = "500px";
image.style.height = "600px";
image.style.filter = "brightness(30%)";
container.appendChild(image);

const text = document.createElement("div");
text.style.position = "absolute";
text.textContent =
  "IDS Luxury Watches Your go to stop place for high quality wrist accesories & devices!";
text.style.fontSize = "24px";
text.style.color = "white";
text.style.top = "50%";
text.style.left = "50%";
text.style.transform = "translate(-50%, -50%)";
text.style.textAlign = "center";
text.style.padding = "20px";

const sendButton = document.createElement("button");
sendButton.style.position = "absolute";
sendButton.textContent = "FOR SELLERS";
sendButton.style.color = "white";
sendButton.style.border = "solid 3px";
sendButton.style.background = "none";
sendButton.style.top = "70%";
sendButton.style.left = "35%";
sendButton.style.padding = "20px 30px";
container.appendChild(text);
container.appendChild(sendButton);

const form1 = document.createElement("div");
form1.style.background = "#F7F9FB";
form1.style.width = "500px";
form1.style.height = "600px";
form1.style.position = "relative";
form1.style.display = "flex";
form1.style.flexDirection = "column";
form1.style.alignItems = "center";
form1.style.justifyContent = "flex-start";

const imageClock = document.createElement("img");
imageClock.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2021/03/08/09/03/analog-6078537_640.png"
);
imageClock.style.width = "100px";
imageClock.style.height = "100px";
imageClock.style.marginTop = "80px";

const title = document.createElement("p");
title.textContent = "Sign In Below!";
title.style.fontSize = "24px";
title.style.marginTop = "30px";

const form = document.createElement("form");
form.setAttribute("action", "/action_page.php");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.alignItems = "center";
form.style.marginTop = "40px";

const labelEmail = document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.textContent = "Email Address:";
labelEmail.style.marginBottom = "10px";

const inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "text");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.style.marginBottom = "20px";

const emailValidationText = document.createElement("div");
emailValidationText.style.color = "green";
emailValidationText.style.fontSize = "14px";
emailValidationText.style.marginBottom = "20px";

const labelPassword = document.createElement("label");
labelPassword.setAttribute("for", "password");
labelPassword.textContent = "Password:";
labelPassword.style.marginBottom = "10px";

const inputPassword = document.createElement("input");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("id", "password");
inputPassword.setAttribute("name", "password");
inputPassword.style.marginBottom = "20px";

const passwordValidationText = document.createElement("div");
passwordValidationText.style.color = "green";
passwordValidationText.style.fontSize = "14px";
passwordValidationText.style.marginBottom = "20px";

const submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "SIGN IN");
submitButton.style.backgroundColor = "#7AB873";
submitButton.style.border = "none";
submitButton.style.color = "white";
submitButton.style.padding = "15px 60px";
submitButton.style.marginTop = "20px";

const signupText = document.createElement("div");
signupText.textContent = "Don't have an account? Sign up here!";
signupText.style.color = "green";
signupText.style.fontSize = "14px";
signupText.style.marginTop = "10px";

inputEmail.addEventListener("input", (event) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(event.currentTarget.value)) {
    emailValidationText.textContent = "Email address validated!";
  } else {
    emailValidationText.textContent = "";
  }
});

inputPassword.addEventListener("input", (event) => {
  const minChar = 5,
    maxChar = 10,
    charactersNo = event.currentTarget.value.length;

  if (charactersNo < minChar || charactersNo > maxChar) {
    passwordValidationText.textContent = "Invalid password!";
  } else {
    passwordValidationText.textContent = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValid =
    emailValidationText.textContent === "Email address validated!";
  const passwordValid = passwordValidationText.textContent === "";

  if (emailValid && passwordValid) {
    window.open("https://www.w3schools.com", "_blank");
  } else {
    alert("Please complete all fields correctly.");
  }
});

form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(emailValidationText);
form.appendChild(labelPassword);
form.appendChild(inputPassword);
form.appendChild(passwordValidationText);
form.appendChild(submitButton);
form.appendChild(signupText);

form1.appendChild(imageClock);
form1.appendChild(title);
form1.appendChild(form);

mainContainer.appendChild(container);
mainContainer.appendChild(form1);

document.body.appendChild(mainContainer);
