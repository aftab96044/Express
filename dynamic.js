import express from 'express'
const app = express()

app.get("/",(req, res)=>{
    const users=['aftab','affan','aman','abu'];
    let data = `<ul>`;
    for(let i=0; i<users.length; i++){
        data+=`<li><a href= "/user/${users[i]}">${users[i]}</a></li>`
        console.log(users[i]);
        
    }
    data+=`</ul>`
    res.send(data)
    
})
app.get("/user/:name",(req, res)=>{
    console.log(req.params.name);
    const userName = req.params.name
    const capitalizedName = userName.charAt(0).toUpperCase() + userName.slice(1)
    res.send(`this is a ${capitalizedName} profile page`)
})

app.listen(1100)





