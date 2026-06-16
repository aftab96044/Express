import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const dbName = "school"
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

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
        const result = await collection.insertOne(req.body)
        res.send("data saved")
    })

    app.post("/add-student-api",async(req, res)=>{
        console.log(req.body);
        const {name, email, age} = req.body
        if(!age || !name || !email){
            res.send({message:"operation failed", success:false})
            return false
        }
        const collection = db.collection("students")
        const result = await collection.insertOne(req.body)
        res.send({message: "data stored",success:true, result:result})
    })

    app.delete("/delete/:id",async(req, res)=>{
        console.log(req.params.id);
        const collection = db.collection("students")
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            res.send({
                message:"student data deleted",
                success:true
            })
        }else{
            res.send({
                message:"student data not deleted! try after sometime",
                success:false
            })
        }
        res.send("working")
        
    })

    app.get("/ui/delete/:id",async(req, res)=>{
        console.log(req.params.id);
        const collection = db.collection("students")
        const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
        if(result){
            res.send("<h1>student record deleted</h1>")
        }else{
            res.send("<h1>student record not deleted</h1>")
        }
        res.send("working")
        
    })

    app.get("/ui/student/:id",async(req, res)=>{
        const id = req.params.id;
        console.log(id);
        const collection = db.collection("students")
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})
        res.render('update-student',{result})
    })

    app.get("/student/:id",async(req, res)=>{
        const id = req.params.id;
        console.log(id);
        const collection = db.collection("students")
        const result = await collection.findOne({_id: new ObjectId(req.params.id)})
        res.send({
            message: 'data fetched',
            success:true,
            result:result
        })
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
