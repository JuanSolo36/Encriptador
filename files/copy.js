// copy.js

function copy() {
  const textToCopy = document.getElementById("text-input-right").value;

  navigator.clipboard
    .writeText(textToCopy)
}

export { copy };
