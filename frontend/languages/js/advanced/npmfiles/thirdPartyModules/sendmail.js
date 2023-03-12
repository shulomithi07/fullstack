var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth : {
        user: 'shulomithi08@gmail.com',
        pass: 'Shulomithi12@1999'
    }
})

var mailOption = {
    from : 'shulomithi07@gmail.com',
    to : 'shulomithi07@gmail.com',
    subject : 'test nodemailer',
    text : 'body of the mail'
}

transporter.sendMail(mailOption, (err, res)=>{
    if(err)throw err
    console.log(res)
})