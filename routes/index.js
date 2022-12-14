var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jon.petek@gmail.com',
    pass: 'vovhglljgngqyrst'
  }
})


var mailSchema = new mongoose.Schema({
  usermail: String
}, { collection: 'BH - UserMail' });

var mailModel = mongoose.model('mailModel', mailSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});



/* Pošlji mail */
router.post('/sendmail', (req, res) => {
  let mail = new mailModel({
    usermail: req.body.email
  })
  mail.save()

  var mailOptions = {
    from: 'jon.petek@gmail.com',
    to: 'breda.hudej@gmail.com',
    subject: "Nov e-naslov za stik",
    text: "Nov e-naslov za stik: " + req.body.email
  }

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) throw err
    console.log('Mail sent' + data.response)
    res.redirect('/')
  })

})

router.post('/secondsender', (req, res) => {
  let mail = new mailModel({
    usermail: req.body.emaildva
  })
  mail.save()

  var mailOptions = {
    from: 'jon.petek@gmail.com',
    to: 'breda.hudej@gmail.com',
    subject: "Nov e-naslov za stik",
    text: `Nov e-naslov za stik: ${req.body.emaildva}`
  }

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) throw err
    console.log('Mail sent' + data.response)
    res.redirect('/')
  })
})

module.exports = router;
