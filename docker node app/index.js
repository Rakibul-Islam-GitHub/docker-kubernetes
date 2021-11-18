import express from "express";

const app= express();
const port=5000;

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port, (req, res) => {
    console.log('app is listening on port 5000')
})