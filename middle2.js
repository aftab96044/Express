import express from 'express'

const app = express()

// function ageCheck(req, res, next){
//     if(!req.query.age || req.query.age<18){
//         res.send("Alert you are a minor")
//     }
//     else{
//         next();
//     }
// }

function ipCheck(req, res, next){
    const ip = req.socket.remoteAddress
    console.log(ip);
    
}
app.use(ipCheck)

app.get("/",(req, res)=>{
    res.send("<h1>Home Page</h1>")
})

app.get("/login",(req, res)=>{
    res.send("<h1>Login Page</h1>")
})

app.get("/admin",(req, res)=>{
    res.send("<h1>Admin Page</h1>")
})

app.listen(2300)

