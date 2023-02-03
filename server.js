const http=require('http');

const express =require('express');

const app=express(); 

// const routes=require('./routes');

// function rqListner(req,res){

// }

app.use((req,res,next)=>{
next();
});

app.use((req,res,next)=>{
// res.send("<h1>Mohit koolwal</h1>");
res.send( { key1: "value" })
});

app.listen(3000);