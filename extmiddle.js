import express from 'express'
import morgan from 'morgan'
const app = express();

app.use(morgan('dev'))
app.get("/",(req, res)=>{
    res.send("home page")
})

app.get("/users",(req, res)=>{
    res.send("users page")
})

app.get("/wait",(req, res)=>{
    setTimeout(()=>{
        res.send("result sfter 1 second")
    }, 1000);
})
app.listen(1000)




















