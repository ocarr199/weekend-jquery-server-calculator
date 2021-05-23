const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({
    extended: true
}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));
// #region logic


// declaring array to push our newCalc objects to
let numbers = []
// function to decide what operator to use on the 2 number inputs
function doTheMath(list) {
    // for loop to go through numbers array
    for (let obj of list) {
        // each conditional looks at operator clicked on
        // from the object.operator in the number array
        // operator clicked on decides what math expression to run
        if (obj.operator == "+") {
            obj.answer = Number(obj.numberOne) + Number(obj.numberTwo);
            console.log(obj.answer)
        } else if (obj.operator == "-") {
            // adding .answer property to obj
            // obj is each object in numbers array
            // those object are the newCalc object 
            obj.answer = Number(obj.numberOne) - Number(obj.numberTwo);
            console.log(obj.answer)
        } else if (obj.operator == "*") {
            obj.answer = Number(obj.numberOne) * Number(obj.numberTwo);
            console.log(obj.answer)
        } else if (obj.operator == "/") {
            obj.answer = Number(obj.numberOne) / Number(obj.numberTwo);
            console.log(obj.answer)
        } else {
            console.log('You broke it dummy o_0')
        }
    }
}
// //#endregion logic

// #region get and post
app.get("/calc", (req, res) => {
    console.log("got to /calc");
    // doTheMath on the array numbers
    // this calculates the final answer of the 
    // numbers and operator
    doTheMath(numbers)
    // send the numbers array as a response
    // now that the function doTheMath has been run on it
    res.send(numbers);
});

app.post("/calc", (req, res) => {
    //   req.body is data from ajax post
    console.log(req.body);
    // pushing data (newCalc Object) into numbers
    numbers.push(req.body);
    // send back a good response
    res.sendStatus(201);
});
// delete 
app.delete("/calc", (req, res) => {
    //   req.body is data from ajax post
    numbers = []
    // send back a good response
    res.send(numbers);
});

// //#endregion get and post 

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});