let inp = document.getElementById("inpt");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let character = "!@#$%^&*()_+";
let allcha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";
let len = 8;
function passcreate() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += character[Math.floor(Math.random() * character.length)];
  while (password.length < 8) {
    password += allcha[Math.floor(Math.random() * allcha.length)];
  }
  return password;
}
let btn1 = document.querySelector(".generate");
btn1.addEventListener("click", () => {
  document.getElementById("inpt").value = passcreate();
});

let copyBtn = document.querySelector("#copy");

copyBtn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Nothing to copy!");
    return;
  }

  inp.select();
  inp.setSelectionRange(0, 99999); // for mobile

  navigator.clipboard.writeText(inp.value);

  alert("Copied to clipboard!");
});
