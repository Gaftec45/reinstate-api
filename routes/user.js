const express = require('express');
const router = express.Router();

router.get('/home', (req, res)=>{
    res.render('home')
})

router.get('/contact', (req, res)=>{
    res.render('contact')
})
router.get('/about', (req, res)=>{
    res.render('about')
})

router.get('/package', (req, res)=>{
    res.render('price')
})

router.get('/conta', (req, res)=>{
    res.render('send')
})



module.exports = router;