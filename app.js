const express = require('express');

const app = express();

app.get( '/', (req, res) =>{
    res.send('<h1>OCD Cyclist Node App</h1>');
});

const port = 5000;
app.listen( port, () =>{
    console.log('OCD Cyclist listening for port 5000!')
});