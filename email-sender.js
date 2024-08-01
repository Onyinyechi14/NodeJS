const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service
  auth: {
    user: 'giftjulius070@gmail.com',
    pass: ''
  }
});

// Define email options
const mailOptions = {
  from: 'giftjulius070@gmail.com',
  to: 'giftjulius070@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
