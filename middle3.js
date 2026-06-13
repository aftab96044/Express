import express from 'express'

const app = express();

function ageCheck(req, res, next){
    if(!req.query.age || req.query.age<18){
        res.send("Alert you are a minor")
    }
    else{
        next()
    }
}
app.use(ageCheck)
app.get("/",(req, res)=>
{
    res.send("<h1>this is form page</h1>")
})

app.get("/login",(req, res)=>
{
    res.send("<h1>login Page</h1>")
})

app.get("/admin",(req, res)=>
{
    res.send("<h1>Admin page</h1>")
})

app.listen(2200)












