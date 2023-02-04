const express =require('express');

const router =express.Router();

const contactUs=require('../controllers/contactus')

router.get('/contact',contactUs.getContact);

router.post('/contact',contactUs.postContact);

module.exports=router;