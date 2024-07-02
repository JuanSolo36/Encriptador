// display.js

function display() {
  const text = document.getElementById("text-input-left");
  const encryptButton = document.getElementById("encrypt-button");
  const textRight = document.getElementById("text-input-right-two");
  const contRightOne = document.querySelector(".cont-right-one");
  const contRightTwo = document.querySelector(".cont-right-two");
  

  encryptButton.addEventListener("click", function () {
    if (text.value.length > 0) {
      textRight.value = text.value;
      contRightOne.style.display = "none";
      contRightTwo.style.display = "block";
    } else {
      contRightOne.style.display = "block";
      contRightTwo.style.display = "none";
    }
  });
}

export { display };
