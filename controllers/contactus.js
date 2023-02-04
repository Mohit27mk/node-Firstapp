const rootDir=require('../util/path');
const path=require('path');


exports.getContact=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contact.html'))
};

exports.postContact=(req,res,next)=>{
    console.log(req.body); 
   res.redirect('/success');
 };