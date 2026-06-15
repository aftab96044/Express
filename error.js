import express from 'express'
const app = express();

app.get("/",(req, res)=>{
    res.send("home page")
})
app.get("/users", (req, res)=>{
    res.send1("Users page")
})
app.get("/error", (req, res)=>{
    const error= new Error('')
    error.status=404
    next(error)
})

// function errorHandling(error, req, res, next){
//     res.status(error.status || 500).send("Try after some time")
// }

app.use((error, req, res, next)=>{
    res.status(error.status || 500).send("Try after some time")
})
app.listen(1100)

















