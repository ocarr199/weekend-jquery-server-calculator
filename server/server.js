const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static("server/public"));
// #region logic



let numbers = []

function doTheMath(list)  {

// for(let obj of list){
//     console.log(obj)
//     if(obj.operator == '+'){
//     obj.answer = obj.numberOne + obj.numberTwo;
//  }else{
//      console.log("doTheMath broke")
//  }
// //   else if(list.operator == "-"){
// //      answer = num1 - num2;
// //  }  else if(operator == "multiply"){
// //      answer = num1 * num2;
// //  }  else if(operator == "divide"){
// //      answer = num1 / num2;
// //  } 
// }

// console.log(answer);
for(let obj of list){
    if(obj.operator == "+"){
        obj.answer = Number(obj.numberOne) + Number(obj.numberTwo);
        console.log(obj.answer)
    } else if(obj.operator == "-"){
        obj.answer = Number(obj.numberOne) - Number(obj.numberTwo);
        console.log(obj.answer)
    } else if(obj.operator == "*"){
        obj.answer = Number(obj.numberOne) * Number(obj.numberTwo);
        console.log(obj.answer)
    } else if(obj.operator == "/"){
        obj.answer = Number(obj.numberOne) / Number(obj.numberTwo);
        console.log(obj.answer)
    }
  
}
}

// //#endregion logic

// #region get and post
app.get("/calc", (req, res) => {
    console.log("got to /calc");
    doTheMath(numbers)
    // respond
    res.send(numbers);
  });

  app.post("/calc", (req, res) => {
    // We want to add the incoming data to /calc
    // req.body is made by body-parser
    // info from client
    let dataRecieved = req.body
    console.log(req.body);
    numbers.push(req.body);

    // send back a good response
    res.send(req.body)
    
    res.sendStatus(201);
  });

// //#endregion get and post 

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
  });