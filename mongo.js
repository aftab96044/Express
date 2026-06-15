import express from 'express'
import { MongoClient } from 'mongodb'

const dbName = "school"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()
app.use(express.urlencoded({extended:true}))

client.connect().then((connection)=>{
    const db = connection.db(dbName);

    app.get("/api", async(req, res)=>{
        const collection = db.collection("students")
        const students = await collection.find().toArray()
        res.send(students)
    })
    app.get("/ui", async(req, res)=>{
        
        const collection = db.collection("students")
        const students = await collection.find().toArray()
        res.render('students',{students})
    })

    app.get('/add',(req, res)=>{
        res.send(`
            <form method="post" action="add-student">
                <input type="text" name="name" placeholder="enter student name" />
                <br><br>
                <input type="email" name="email" placeholder="enter student email" />
                <br><br>
                <input type="text" name="age" placeholder="enter student age" />
                <br><br>
                <button>Add Student</button>
            </form>
        `)
    })
    app.post("/add-student", async(req, res)=>{
        // const students = await collection.find().toArray()
        console.log(req.body);
        const collection = db.collection("students")
        const result = collection.insertOne(req.body)
        res.send("data saved")
    })
})
 

app.set('view engine', 'ejs')

// app.get("/",async(req, res)=>{
//     await client.connect()
//     const db = client.db(dbName)
//     const collection = db.collection('students')

//     const students = await collection.find().toArray()
//     console.log(students);

//     res.render('students',{students})
// })
app.listen(1100)
