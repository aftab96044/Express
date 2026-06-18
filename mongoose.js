import mongoose from 'mongoose';
import express from 'express'
import studentModel from './model/studentModel.js';

const app = express()
app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/school").then(()=>{
    console.log("____connected____");
    
})

app.get("/", async(req, res)=>{
    
    
    const studentData = await studentModel.find()
    res.send(studentData)
})

app.post("/save",async(req, res)=>{
    console.log(req.body);
    const{name, age, email} = req.body

    if(!req.body || !name || !age || !email){
        res.send({
            message: "data not stored",
            success: false,
            storedInfo: null
        })
        return false 
    }

    const studentData = await studentModel.create(req.body)

    res.send({
        message: "data stored",
        success: true,
        storedInfo: studentData 
    })
})

app.put("/update/:id",async(req, res)=>{
    console.log(req.body);
    const id = req.params.id;
    console.log(req.body, id);
    
    const studentData = await studentModel.findByIdAndUpdate(id, {
        ...req.body
    })
    res.send({
        message: "data updated",
        success: true,
        info: null
    })
})

app.delete("/delete/:id",async(req, res)=>{
    
    const id = req.params.id;
   
    
    const studentData = await studentModel.findByIdAndDelete(id)
    res.send({
        message: "data deleted",
        success: true,
        info: null
    })
})

app.listen(1100)

// async function dbConnection(){
//     await mongoose.connect("mongodb://localhost:27017/school")
//     const schema = mongoose.Schema({
//      name: String,
//      email: String,
//      age: Number
//     })

//     const studentModel = mongoose.model('students',schema)
//     const result = await studentModel.find()
//     console.log(result);
    
// }

// dbConnection()
