const mongoose=require("mongoose")
const {Schema}=mongoose;


const NoteSchema=new Schema({
    hlo:{
        type:String
    },
    title:{
        type:String
    },
    description:{
        type:String
    }
})

module.exports = mongoose.model("notecpp",NoteSchema)