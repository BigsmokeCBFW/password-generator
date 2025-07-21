const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let lenght = 8;

const passwordOneEl = document.getElementById("password-one")
const passwordTwoEl = document.getElementById("password-two")

function generatePassword() {
  password1 = 0
  password2 = 0
  for(let i = 0; i < lenght; i += 1){
    let randomIndex = Math.floor(Math.random() * characters.length)
    password1 += characters[randomIndex]
  }

  for(let i = 0; i < lenght; i += 1){
    let randomIndex = Math.floor(Math.random() * characters.length)
    password2 += characters[randomIndex]
  }
  passwordOneEl.textContent = password1
  passwordTwoEl.textContent = password2
}

function copyToClipboard(id) {
        const password = document.getElementById(id);
        let content = password.innerText
        navigator.clipboard.writeText(content);
}