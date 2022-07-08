const mongoose=require("mongoose")
const {Schema}=mongoose;


const NoteSchema=new Schema({
    newsec:{
        type:String
    }
   
})

module.exports = mongoose.model("section",NoteSchema)