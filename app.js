const express = require('express');
const router = require('./routes/user');
const payRouter = require('./routes/pay')
const app = express();
const PORT = 4000;

// view engine 
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// userRoute
app.use(router);
app.use('/new', payRouter);

// router 
app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(PORT, ()=>{
    console.log(`App is listening to ${PORT}`);
})