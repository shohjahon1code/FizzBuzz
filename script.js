const elForm = document.querySelector("form");
const elInput = document.querySelector("#input");
const elContent = document.querySelector(".item");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const elInputValue = Number(elInput.value);
  let newString = "";

  if (elInputValue % 3 == 0) {
    newString += "Fizz";
  }

  if (elInputValue % 5 == 0) {
    newString += "Buzz";
  }

  elContent.textContent =
    newString || `${elInputValue} bu son 3 ga ham 5 ga ham bo'linmaydi!!`;
  elInput.value = "";
});
