// const http=require('http');
const path=require('path');

const express =require('express');
const bodyParser=require('body-parser');

const adminRoutes=require('./route/admin')
const shopRoutes=require('./route/shop');
const contactRoutes=require('./route/contact')
const successRoutes=require('./route/success');

const app=express(); 

app.use(express.static(path.join(__dirname,'public')))

// const routes=require('./routes');

// function rqListner(req,res){

// }

// app.use('/',(req,res,next)=>{
//     res.send("<h1>Add product</h1>");
//     next();
//     });

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(contactRoutes);
app.use(successRoutes);
app.use('/shop',shopRoutes);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

// app.use('/add-product',(req,res,next)=>{
//     res.send('<form action="/product" method="POST" ><input type="text" name="title"><input type="number" name="size"><button type="submit">Add Product</button></form>');
// });

// app.post('/product',(req,res,next)=>{
//    console.log(req.body); 
//   res.redirect('/');
// });

// app.use('/',(req,res,next)=>{
// res.send("<h1>Mohit koolwal</h1>");
// });

app.listen(4000);