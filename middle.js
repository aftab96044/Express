
import express from 'express'
const app = express();

app.use((req, res, next)=>{
    console.log("user is accessing "+req.url);
    next()
})

app.get("/", (req, res)=>{
    res.send("Home page")
})

app.get("/user", (req, res)=>{
    res.send("users page")
})

app.get("/products", (req, res)=>{
    res.send("products page")
})

app.listen(1400)










