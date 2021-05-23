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
  $('#clearAll').on('click', clearList)
}

// functions to decide what operator to use
function clickedAdd() {
  operator = "+"
  console.log(operator);
}

function clickedSubtract() {
  operator = "-"
  console.log(operator);
}

function clickedMultiply() {
  operator = "*"
  console.log(operator);
}

function clickedDivide() {
  operator = "/"
  console.log(operator);
}
// clear text inputs
function clearInp() {
  $('#num1').val('')
  $('#num2').val('')
}
// function run on page load
// retrieves numbers array
function getCalc() {
  $.ajax({
    // finding app.get('/calc' in sever.js)
    method: "GET",
    url: "/calc",
    // what happens once app.get is found
    // response is what is sent from the get
    // in this case response is the numbers array
  }).then(function (response) {
    // response is what was in the res.send()
    console.log(response);
    $('#mathProblems').empty()
    for (let answer of response) {
      $('#lastAnswer').text(`${answer.answer}`)
      $('#mathProblems').prepend(`
        <li>${answer.numberOne} ${answer.operator} ${answer.numberTwo} = ${answer.answer}</li>
        `)
    }
  });
}
// declaring operator variable
let operator;
// function run when equals button is clicked
function Calculate() {
  // declaring objects that will be put in numbers array
  let newCalc = {
    // first number
    numberOne: Number($('#num1').val()),
    // second number
    numberTwo: Number($('#num2').val()),
    // operator
    operator: operator,
  }
  // ajax finds app.post('/calc' and sends it 
  // the newCalc object
  // post request only goes through when all inputs 
  // have a vaule
  if ((!$('#num1').val()) || (!$('#num2').val()) || (operator == undefined)) {
    alert("Fill out all inputs")
  } else {
    $.ajax({
      method: "POST",
      url: "/calc",
      data: newCalc,
    }).then(function (response) {
      // response is status code
      // this time it will log "created" bc code 201
      console.log(response);
      // run getCalc again with updated numbers array
      getCalc()
    });
  }
}

function clearList() {
  $.ajax({
    method: "DELETE",
    url: "/calc",
    // data: newCalc,
  }).then(function (response) {
    // response is status code
    // this time it will log "created" bc code 201
    console.log(response);
    // run getCalc again with updated numbers array
    getCalc()
  });
}