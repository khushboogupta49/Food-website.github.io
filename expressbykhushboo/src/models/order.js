const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    fullname:{

        type:String,
        require:true
    },

    email:{

        type:String,
        require:true,
        unique:true
    },
    
    mobile:{
        type:Number,
        require:true,
        unique:true
    },
    food :{
        type:String,
        require:true
    },

    address:{
        type:String,
        require:true
    },
});
   
// create collection 
const Order = new mongoose.model("Order", userSchema);

module.exports = Order;