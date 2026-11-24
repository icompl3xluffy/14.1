import "dotenv/config"
import express from "express"
import { MongoClient } from 'mongodb';

const app = express()

const port =3000


  
app.get("/", async(req, res)=>{
    try{
        await client.connect()
        await client.db("admin").command({ping:1});
        res.json({ message: "Successfully connected to the database!" })
    }
    catch(error){
        console.error(error);
        res.status(500).json({message:" Failed to connect to database."})
    }
    
})



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
});

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);



 
