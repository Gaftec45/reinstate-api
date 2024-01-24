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

module.exports = router;