import express from 'express'

const app = express()

function checkAgeRouteMiddleware(req, res, next){
    console.log(req.query.age);
    
    if(!req.query.age || req.query.age<18){
        res.send("not allowed")
    }
    else{
        next()
    }
}

app.get('',(req, res)=>{
    res.send("<h1>Home page</h1>")
})

app.get('/login',(req, res)=>{
    res.send("<h1>Login page</h1>")
})

//the fxn is only applied to the below method.l
app.get('/user',checkAgeRouteMiddleware,(req, res)=>{
    res.send("<h1>User page</h1>")
})

app.get('/products',(req, res)=>{
    res.send("<h1>Products page</h1>")
})

app.listen(2400)












