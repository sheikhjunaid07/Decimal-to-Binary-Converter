//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let erroeMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);

  //Convert the decimal to binary
  binInp.value = decValue.toString(2);
});

//Convert binary to binary when user inputs in the binary field
binInp.addEventListener("input", () => {
  let binValue = binInp.value;

  //if binary number is vlid convert it to decimal
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 2);
    erroeMsg.textContent = "";
  }

  //else display error message
  else {
    erroeMsg.textContent = "Please enter an valid binary input";
  }
});

function binValidator(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] != "0" && num[i] != "1") {
      return false;
    }
  }
}
