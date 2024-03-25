
const Directorial = require ('../models/directorialModel')

const createDirectorialPost = async (req,res)=>{
    try{
      const directorial =  new Directorial({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            contact:req.body.contact,
            email:req.body.email,
        });
        const directorialData = await directorial.save();

        res.status(200).send({success:true, msg:'Directorial Post Data Successfully',data:directorialData});
    } catch (error){
        res.status(400).send({success:false, msg:error.message})
    }
}

const getDirectorialPosts = async(req,res)=>{
    try{
        const directorial = await Directorial.find({});
        res.status(200).send({success:true, msg:'Directorial Post Data Successfully',data:directorial});

    } catch (error){
        res.status(400).send({success:false, msg:error.message})
    }
}


module.exports = {createDirectorialPost,getDirectorialPosts}