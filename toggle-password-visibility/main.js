const eye = document.querySelector(".eye");
const eyeOff = document.querySelector(".eye-off");
const passwordInput = document.querySelector("input");

const togglePasswordVisibilty = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
};

const toggleHidden = () => {
  eye.classList.toggle("hidden");
  eyeOff.classList.toggle("hidden");
  togglePasswordVisibilty();
};

eye.addEventListener("click", toggleHidden);
eyeOff.addEventListener("click", toggleHidden);
