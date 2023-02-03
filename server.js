const http=require('http');

const express =require('express');
const bodyParser=require('body-parser');


const app=express(); 

// const routes=require('./routes');

// function rqListner(req,res){

// }

// app.use('/',(req,res,next)=>{
//     res.send("<h1>Add product</h1>");
//     next();
//     });

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST" ><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
});

app.post('/product',(req,res,next)=>{
   console.log(req.body); 
  res.redirect('/');
});

app.use('/',(req,res,next)=>{
res.send("<h1>Mohit koolwal</h1>");

});

app.listen(4000);