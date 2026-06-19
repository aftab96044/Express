import express from 'express'
import nodemailer from 'nodemailer'

const app = express()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'aftab.neymar.10@gmail.com',
        pass: 'ands jvas uleq igqk'
    }
})

app.use(express.urlencoded({extended: false}))
app.set("view engine","ejs")
app.get("/mail",(req, res)=>{
    res.render("mail")
})

app.post("/submit-email",(req, res)=>{
    console.log(req.body);
    
    const mailOptions={
        from: 'aftab.neymar.10@gmail.com',
        to: 'aftab.neymar.10@gmail.com',
        subject: req.body.subject,
        text: req.body.mail
    }
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error)
        {
            res.send("email operation failed, try again")
        }else{
            res.send("mail send")   
        }
    })

    res.send("email sent")
})

app.listen(1100)