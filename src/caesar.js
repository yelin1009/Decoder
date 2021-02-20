// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here

    let index = 0;
    let encodedText = "";
    input = input.toLowerCase();
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (encode == false) {
      shift = -shift;
    }

    for (let i = 0; i < input.length; i++) {
      let inputCode = input.charCodeAt(i);
      index = inputCode + shift;

      if (
        inputCode < 65 ||
        inputCode > 122 ||
        (inputCode > 90 && inputCode < 97)
      ) {
        encodedText += input[i];
      } else {
        if (inputCode + shift <= 96) {
          let wrapAround = 97 - (inputCode + shift);
          inputCode = 123 - wrapAround;
        } else if (inputCode + shift >= 123) {
          let wrapAround = 123 - (inputCode + shift);
          inputCode = 97 - wrapAround;
        } else {
          inputCode += shift;
        }

        encodedText += String.fromCharCode(inputCode);
      }
    }
    return encodedText;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
