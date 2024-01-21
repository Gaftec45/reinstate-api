const express = require('express');
const router = require('./routes/user');
const app = express();
const PORT = 4000;

// view engine 
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// userRoute
app.use(router)

// router 
app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(PORT, ()=>{
    console.log(`App is listening to ${PORT}`);
})