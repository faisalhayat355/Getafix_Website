const Directorial = require ('../models/directorialModel')

const createDirectorialPost = async (req,res)=>{
    try{
      const directorial =  new Directorial({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            contact:req.body.contact,
            
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

const updateDirectorialPost= async (req,res)=>{
    try{
        if(req.file !== undefined){
            var id = req.body.id;
            var firstname = req.body.firstname;
            var lastname = req.body.lastname;
            var email = req.body.email;
            var contact = req.body.contact;
           
          await Directorial.findByIdAndUpdate({_id:id},{$set:{firstname:firstname,lastname:lastname,email:email,contact:contact}})
            res.status(200).send({success:true,msg:"Post Updated Sucessfully"});
        }
        else{
            var id = req.body.id;
            var firstname = req.body.firstname;
            var contact = req.body.contact;
            var lastname = req.body.lastname;
            var email = req.body.email;

          await Directorial.findByIdAndUpdate({_id:id},{$set:{firstname:firstname,lastname:lastname,email:email,contact:contact}})
            res.status(200).send({success:true,msg:"Post Updated Sucessfully"});
        }
    }catch(error){
        res.status(400).send({success:false, msg:error.message})
    }
}

module.exports = {createDirectorialPost,getDirectorialPosts,updateDirectorialPost}