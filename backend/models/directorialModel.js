const mongoose = require('mongoose');

const directorialSchema= new mongoose.Schema({

    firstname:{
        type:String,
 
    },
    lastname:{
        type:String,
 
    },
    contact:{
        type:String,
    
    },
    email:{
        type:String,
    
    }
},{
    timestamps:true,
});


module.exports = mongoose.model("Directorial",directorialSchema)
