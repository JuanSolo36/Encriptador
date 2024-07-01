// display.js

function display() {
  const text = document.getElementById("text-input-left");
  const img = document.getElementById("sir");
  const h3 = document.getElementById("message-status");
  const encryptButton = document.getElementById("encrypt-button");
  const textRight = document.getElementById("text-input-right");


  textRight.style.display = "none";
  encryptButton.addEventListener("click", function () {
    if (text.value.length > 0) {
      img.style.display = "none";
      h3.style.display = "none";
    } else {
      img.style.display = "block";
      h3.style.display = "block";
      textRight.style.display = "block";
    }
  });

}

export { display };
