import express from 'express'
import home from './page/home.js'
import login from './page/login.js'
import submit from './page/submit.js'

const app = express();

app.get("/",(req, res)=>{
    res.send(home())
})
app.get("/login",(req, res)=>{
    res.send(login())
})
app.post("/submit",(req, res)=>{
    res.send(submit())
})
app.listen(1500)



