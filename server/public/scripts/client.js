$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
getCalc()
//   click listeners
$("#equals").on('click', Calculate)
$("#add").on('click', clickedAdd)
$("#subtract").on('click', clickedSubtract)
$("#multiply").on('click', clickedMultiply)
$("#divide").on('click', clickedDivide)
$("#clear").on('click', clearInp)
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
function clearInp (){
    $('#num1').val('')
    $('#num1').val('')
}
function getCalc(){

$.ajax({
    method: "GET",
    url: "/calc",
  }).then(function (response) {
    // response is what was in the res.send()
    console.log(response);

  });
}

  let operator;
  let numberOne = Number($('#num1').val());
  let numberTwo = Number($('#num2').val());

  function Calculate (){
let newCalc = {
    numberOne:   Number($('#num1').val()),
    numberTwo:    Number($('#num2').val()),
    operator: operator,
    answer
}

    $.ajax({
        method: "POST",
        url: "/calc",
        data: newCalc,
      }).then(function (response) {
        // response is what was in the res.send()
        console.log(response);
getCalc()
       
      });
  }
 


