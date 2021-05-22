$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
$("#equals").on('click', Calculate)
$("#add").on('click', clickedAdd)
$("#subtract").on('click', clickedSubtract)
$("#multiply").on('click', clickedMultiply)
$("#divide").on('click', clickedDivide)
}

let operator;

function Calculate (){
    let numberOne = Number($('#num1').val());
let numberTwo = Number($('#num2').val());

let answer;
if(operator == "add"){
    answer = numberOne + numberTwo;
} else if(operator == "subtract"){
    answer = numberOne - numberTwo;
}  else if(operator == "multiply"){
    answer = numberOne * numberTwo;
}  else if(operator == "divide"){
    answer = numberOne / numberTwo;
} 
console.log(answer);
}

function clickedAdd (){
    operator = "add"
    console.log(operator);
}

function clickedSubtract (){
    operator = "subtract"
    console.log(operator);

}
function clickedMultiply (){
    operator = "multiply"
    console.log(operator);
}
function clickedDivide (){
    operator = "divide"
    console.log(operator);

}
