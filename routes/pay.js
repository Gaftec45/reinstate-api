const express = require('express');
const router = express.Router();

router.get('/b-payment', (req, res)=>{
    res.render('basic')
})

router.get('/p-payment', (req, res)=>{
    res.render('pro')
})


router.get('/basic-payment', (req, res)=>{
    res.render('basic');
})

router.get('/pro-payment', (req, res)=>{
    res.render('pro');
})




module.exports = router;