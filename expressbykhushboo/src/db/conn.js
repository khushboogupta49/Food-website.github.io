
const mongoose = require("mongoose");

// require("./db/conn");
mongoose.connect("mongodb://localhost:27017/foodproject")

.then(()=>{
    console.log(`The connection is sucessfully`)
    
}).catch((e)=>{
    console.log(`The connection is not sucessfully`)
})