import { log } from 'console';
import express from 'express'
import path from 'path'

const app = express();
const publicPath= path.resolve('public')

app.use(express.static(publicPath));
console.log(publicPath);

app.get("/",(req, res)=>{
    const absPath = path.resolve('./view/home.html')

    res.sendFile(absPath)
})

app.get("/login",(req, res)=>{
    const absPath = path.resolve('./view/login.html')

    res.sendFile(absPath)
})

app.get("/about",(req, res)=>{
    const absPath = path.resolve('./view/about.html')

    res.sendFile(absPath)
})

app.use((req, res)=>{
    const absPath = path.resolve('./view/404.html')
    res.status(404).sendFile(absPath)
})
app.listen(1300)