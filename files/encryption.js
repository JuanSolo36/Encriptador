// encryption.js

function encryption(word) {
  const conversions = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };
  let convertedWord = "";
  for (let char of word) {
    if (conversions[char]) {
      convertedWord += conversions[char];
    } else {
      convertedWord += char;
    }
  }
  return convertedWord;
}

function decryption(encryptedWord) {
  const conversions = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  let decryptedWord = encryptedWord;
  for (let key in conversions) {
    decryptedWord = decryptedWord.split(key).join(conversions[key]);
  }
  return decryptedWord;
}

export { encryption, decryption };
