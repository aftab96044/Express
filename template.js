
import express from 'express'
const app = express()

app.set('view engine','ejs')
app.get("/",(req, res)=>{
    res.render('home',{name:'aftab',ytChannel:'Code step by step'})
})

app.listen(1100)













