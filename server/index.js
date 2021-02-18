var nodemailer = require('nodemailer');
const express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

var transport = {
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.USER,
      pass: process.env.PASS
    }
}
  
var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

//parse api req
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// An api endpoint that sends an email
app.post('/api/send', (req,res) => {
    var name = req.body.name
    var email = req.body.email
    var text = req.body.message
    var content = `A new message from ${name} has been received.\n ${text}`;
    var htmlContent = `<h3>A new message from ${name} has been received. </h3> <p>${text}</p>`
  
    var mail = {
      from: "contact@wildgamecooking.ca",
      to: 'contact@wildgamecooking.ca', 
      subject: '[Wild Game Cooking] - Contact Form New Message',
      replyTo: email,
      text: content,
      html: htmlContent
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            msg: 'fail'
          })
        } else {
          res.json({
            msg: 'success'
          })
        }
    })
});


// Configure Express for serving static React production files
if(process.env.NODE_ENV == "production"){
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.use((err, req, res, next) => {
  console.log(err);
  next();
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});