const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express();
// const mongoURI="mongodb://localhost:27017/testing?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURI=process.env.MONGO_ID
const connectToMongo=async()=>{
 await mongoose.connect(mongoURI,()=>{console.log("connected to mongo")})
}
connectToMongo();
app.use(cors({
    origin:"*",
  }))
const port=5000;
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("You are in Home of data base , BOOM :)")
})
app.use('/api/notes',require('./routes/notes'))

app.listen(port,()=>{
    console.log(`app is listening at http://localhost:${port}`)
})