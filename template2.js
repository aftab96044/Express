import express from 'express'
const app = express()

app.use(express.urlencoded({extended: false}))

app.set('view engine','ejs')
app.get('/add-user',(req, res)=>{
    res.render('addUser')
})
app.post('/submit-user',(req, res)=>{
    console.log(req.body);
    res.render('submitUser', req.body)
    
})
app.get("/users",(req, res)=>{
    const users=['anil','sidhu','aftab']
    res.render("users",{users: users})
})
app.listen(1100)







