const express=require("express")
const router=  express.Router();
const Noteds=require("../model/Codeds")
const Notecpp=require("../model/Codecpp")

// Cpp means python , porpatlo python badhulo cpp tho anni chesa ippudu names marchadam badhulu continuing alane
const { body } = require("express-validator");
router.get("/ds",async (req,res)=>{
    const data=await Noteds.find();
    res.json(data);
})
router.get("/cpp",async (req,res)=>{
    const data=await Notecpp.find();
    res.json(data);
})
router.post("/ds",async(req,res)=>{
 
  
    try{
    const note_saving=new Noteds({
        hlo:req.body.code,
        title:req.body.title,
        description:req.body.description
    })
    note_saved=await note_saving.save()

    res.json(note_saved)

}catch(e){
    res.json(e)
}
})
router.post("/cpp",async(req,res)=>{
 
  
    try{
    const note_saving=new Notecpp({
        hlo:req.body.code,
        title:req.body.title,
        description:req.body.description
    })
    note_saved=await note_saving.save()

    res.json(note_saved)

}catch(e){
    res.json(e)
}
})
router.put("/cpp",async(req,res)=>{
    try{

        let code = await Notecpp.findById(req.body._id);
        let newCode={}
        if(req.body.title){
            newCode.title=req.body.title;
        }
        if (req.body.description){
            newCode.description=req.body.description;
        }
        if(req.body.hlo){
            newCode.hlo=req.body.hlo;
        }

        code = await Notecpp.findByIdAndUpdate(
            req.body._id,
            { $set: newCode },
            { new: true }
          );
          res.json({ code });



    }catch(e){
        res.json({e});
    }
})

router.put("/ds",async(req,res)=>{
    try{

        let code = await Noteds.findById(req.body._id);
        let newCode={}
        if(req.body.title){
            newCode.title=req.body.title;
        }
        if (req.body.description){
            newCode.description=req.body.description;
        }
        if(req.body.hlo){
            newCode.hlo=req.body.hlo;
        }

        code = await Noteds.findByIdAndUpdate(
            req.body._id,
            { $set: newCode },
            { new: true }
          );
          res.json({ code });



    }catch(e){
        res.json({e});
    }
})


router.delete("/ds",async(req,res)=>{
    try{
    let code = await Noteds.findById(req.body._id);
    code =await Noteds.findByIdAndDelete(req.body._id);
    res.json({"Success":"Succesucfully deleted"});
    }catch(e){
        res.json({e})
    }
})

router.delete("/cpp",async(req,res)=>{
    try{
    let code = await Notecpp.findById(req.body._id);
    code =await Notecpp.findByIdAndDelete(req.body._id);
    res.json({"Success":"Succesucfully deleted"});
    }catch(e){
        res.json({e})
    }
})



module.exports=router;