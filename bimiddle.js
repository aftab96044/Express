import express from 'express'

const app = express()

app.get("/",(req, res)=>{
    res.send("Home page")
})

app.use(express.urlencoded({extended:false}))
app.get("/login",(req, res)=>{
    res.send(`
        <form action="/submit" method="post">
            <input type="text" placeholder="enter email" name="email" />
            <input type="text" placeholder="enter password" name="password" />
            <button>Login</button>
        
        </form>
        
        `)
})
app.post("/submit",(req, res)=>{
    console.log("user login details are",req.body);
    res.send("submit page")
})

app.get("/users",(req, res)=>{
    res.send("Users page")
})

app.listen(1000)













