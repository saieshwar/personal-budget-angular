const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

app.use('/', express.static('public'));
let rawdata = fs.readFileSync('myBudget.json');
let student = JSON.parse(rawdata);

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

app.get('/hello', (req,res) => { 
    res.send('Hello World');
});

// app.get('/budget', (req, res) =>{
//     res.json(budget); 
// });

app.get('/budget', (req, res) =>{
    res.json(student); 
});



app.listen(port, () => {
    console.log('Example app listening at http://localhost:'+port);
});
