require('dotenv').config();
const express = require('express');
const router = require('./routes/user');
const payRouter = require('./routes/pay');
// const emailServer = require('./email');
const nodemailer = require('nodemailer')
const app = express();
const PORT = process.env.PORT

// view engine 
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// userRoute
app.use(router);
app.use('/new', payRouter);
// app.use('/c', emailServer)

// router 
app.get('/', (req, res)=>{
    res.render('home')
})


app.use(express.json());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Email sending endpoint
app.post('/sendemail', (req, res) => {
    const { to, subject, text } = req.body;

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.message);
        }
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, ()=>{
    console.log(`App is listening to ${PORT}`);
})