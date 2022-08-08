// let check = prompt("Your name please ? ")
// alert("It is running " + check)

// function clickBtn() {
//     alert("btn was clicked")
// }
  
let btnTranslate = document.querySelector('#btn-translate')
let txtTranslate = document.querySelector("#text-translate")
let outputText = document.querySelector("#output")

outputText.innerText= ""
// console.log(txtTranslate)

function clickHandler()
{
  outputText.innerText = "Translated " + txtTranslate.value
 }

//     .addEventListener("click", function clickBtn() { 
//     alert("btn was clicked")
// }
//   )

btnTranslate.addEventListener("click", clickHandler)
// console.log(btnTranslate)

// document.querySelector("textarea")
//   .btnPrimary
// #btn-primary



