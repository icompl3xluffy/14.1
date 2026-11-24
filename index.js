import "dotenv/config"
import express from "express"
import mongoose from "mongoose"

import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);

const app = express()

app.use(express.json())

const port =process.env.port || 3000

mongoose.connect(process.env.MONGO_URI)
     .then(()=> { 
        console.log("Successfilly connected to MondoDB")
     })

     .catch((err)=>{
        console.log('Connect Error' , err)
    })
        

    // Base Route
app.get("/",(req, res)=>{
    res.json({ message: "Successfully connected to the database!" })
})




app.post("/api/users", async (req, res)=>{

    try{
        const response= await User.create(req.body)
        res.json(response)
    }
    catch(err){
       res.status(500).send("Something went wrong: " + err.message)
    }
    

})

// app.post("/api/users/login",)




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});