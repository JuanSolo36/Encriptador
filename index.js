// index.js

// Importar funciones de los otros módulos
import { encryption, decryption } from "./files/encryption.js";
import { copy } from "./files/copy.js";
import { display } from "./files/display.js";

// Inicializar la funcionalidad
document.addEventListener("DOMContentLoaded", () => {
  // Llamar a la función display para manejar la visibilidad del elemento
  display();

  // Añadir event listeners para los botones de encriptar y desencriptar
  document.getElementById("encrypt-button").addEventListener("click", () => {
    const inputText = document.getElementById("text-input-left").value;
    const encryptedText = encryption(inputText);
    document.getElementById("text-input-right").value = encryptedText;
  });

  document.getElementById("decrypt-button").addEventListener("click", () => {
    const inputText = document.getElementById("text-input-left").value;
    const decryptedText = decryption(inputText);
    document.getElementById("text-input-right").value = decryptedText;
  });

  // Añadir event listener para el botón de copiar
  document.getElementById("copy-button").addEventListener("click", () => {
    copy();
  });
});
