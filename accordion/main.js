const buttons = document.querySelectorAll("button");
const paragraphs = document.querySelectorAll("p");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.innerText;
    if (text === "SHOW") {
      button.innerText = "HIDE";
    } else {
      button.innerText = "SHOW";
    }

    const parent = button.parentElement;
    const parentsSibling = parent.nextElementSibling;
    parentsSibling.classList.toggle("hide");
  });
});
