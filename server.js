const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use('/', express.static('public'));

//Reading from JSON file
let rawdata = fs.readFileSync('myBudget.json');
let my_budget = JSON.parse(rawdata);



app.get('/hello', (req,res) => { 
    res.send('Hello World');
});

// app.get('/budget', (req, res) =>{
//     res.json(budget); 
// });


//sending response as a json
app.get('/budget', (req, res) =>{
    res.json(my_budget); 
});


app.listen(port, () => {
    console.log('Example app listening at http://localhost:'+port);
});











//references
// const budget = {
//     myBudget: [
//     {
//         title: 'Eat out',
//         budget: 25
//     },
//     {
//         title: 'rent',
//         budget: 375
//     },
//     {
//         title: 'grocery',
//         budget: 110
//     },
//   ]
// };