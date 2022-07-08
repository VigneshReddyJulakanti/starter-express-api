const express=require("express")
const router=  express.Router();
const Noteds=require("../model/Codeds")
const Notecpp=require("../model/Codecpp")
const Newsec=require("../model/Section")
const AllNotes=require("../model/AllNotes")
const { body } = require("express-validator");


router.post("/newsec", async (req,res)=>{
    try{
        const note_saving=new Newsec({
            newsec:req.body.newsec
        })
        note_saved=await note_saving.save()
    
        res.json(note_saved)
    
    }catch(e){
        res.json(e)
    }
})
router.get("/newsec", async (req,res)=>{
    const data=await Newsec.find();
    res.json(data);
})

// getting all notes
router.get("/allnotes",async (req,res)=>{
    const data=await AllNotes.find({"newsec":req.query.secname});
    // const data=await AllNotes.find({});
    // res.send(req.query.secname);
    res.json(data);
})

//postig all notes


router.post("/allnotes",async(req,res)=>{
 
  
    try{
    const note_saving=new AllNotes({
        hlo:req.body.code,
        title:req.body.title,
        description:req.body.description,
        newsec:req.body.secname
    })
    note_saved=await note_saving.save()

    res.json(note_saved)

}catch(e){
    res.json(e)
}
})

//updating all notes

router.put("/allnotes",async(req,res)=>{
    try{

        let code = await AllNotes.findById(req.body._id);
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

        code = await AllNotes.findByIdAndUpdate(
            req.body._id,
            { $set: newCode },
            { new: true }
          );
          res.json({ code });



    }catch(e){
        res.json({e});
    }
})

// deleting all notes

router.delete("/allnotes",async(req,res)=>{
    try{
    let code = await AllNotes.findById(req.body._id);
    code =await AllNotes.findByIdAndDelete(req.body._id);
    res.json({"Success":"Succesucfully deleted"});
    }catch(e){
        res.json({e})
    }
})


// Cpp means python , porpatlo python badhulo cpp tho anni chesa ippudu names marchadam badhulu continuing alane

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