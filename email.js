const express = require('express');
const emailServer = express.Router();
const nodemailer = require('nodemailer')


emailServer.use(express.json()); // for parsing application/json

// Email configuration
let transporter = nodemailer.createTransport({
    service: 'gmail', // for example, gmail
    auth: {
        user: 'your-email@gmail.com', // your email address
        pass: 'your-password' // your email password
    }
});

emailServer.post('/sendemail', (req, res) => {
    const { to, subject, text } = req.body;

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.message);
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

module.exports = emailServer;