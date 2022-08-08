// let check = prompt("Your name please ? ")
// alert("It is running " + check)

// function clickBtn() {
//     alert("btn was clicked")
// }
  
let btnTranslate = document.querySelector('#btn-translate')
let txtTranslate = document.querySelector("#text-translate")
// console.log(txtTranslate)

function clickHandler()
{
  console.log("Clicked")
  console.log("input", txtTranslate.value)
 }

//     .addEventListener("click", function clickBtn() { 
//     alert("btn was clicked")
// }
//   )

btnTranslate.addEventListener("click", clickHandler)
// console.log(btnTranslate)


