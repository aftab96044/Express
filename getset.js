import express from 'express'
import session from 'express-session'
const app = express()

app.set("view engine", "ejs")

app.use(session({
    secret:'apple'

}))

app.use(express.urlencoded({extended:true}))
app.get("/login",(req, res)=>{
    res.render('Login')
})

app.post("/profile",(req, res)=>{
    req.session.data= req.body;
    console.log(req.session.data);
    
    res.render('profile')
})

app.get("/",(req, res)=>{
    const data = req.session.data
    console.log("data",data);
    
    res.render('homes',{data})
})

app.listen(1100)