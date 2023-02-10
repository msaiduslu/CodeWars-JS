//********************************************Number to Roman Convert ******************************************************/

function integerToRoman(inputNumber) {
  const decimalNumb = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumb = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I",];
  let result = "";

  for (let i = 0; i <= 12; i++) {
    if (inputNumber >= decimalNumb[i]) {
      let intNumb = Math.trunc(inputNumber / decimalNumb[i]);
      output += romanNumb[i].repeat(intNumb);
      inputNumber = inputNumber % decimalNumb[i];
    }
  }
  return result;
}

console.log(integerToRoman(227));