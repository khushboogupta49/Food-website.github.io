

const express = require ("express");

const app = express();
const port = process.env.PORT || 8000;

const path = require("path");
const hbs = require("hbs");

require("./db/conn");

const Order = require("./models/order");
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// console.log(__dirname);
const static_path  = path.join(__dirname, "../public");

const template_path  = path.join(__dirname, "../templates/views");
const partials_path  = path.join(__dirname, "../templates/partials");



app.use (express.static(static_path));

app.set ("view engine", "hbs");

app.set ("views",template_path);
hbs.registerPartials(partials_path);




app.get("/", (req,res) =>{
    res.render("home");

});


app.get("/speciality", (req,res) =>{
    res.render("speciality");

});

app.get("/popular", (req,res) =>{
    res.render("popular");

});
app.get("/gallery", (req,res) =>{
    res.render("gallery");

});
app.get("/customer", (req,res) =>{
    res.render("customer");

});

app.get("/order", (req,res) =>{
    res.render("order");

});
app.post("/order",async (req,res) =>{
try{

   
    
      const userdata = new Order({
          fullname:req.body.fullname,
          email:req.body.email,
          mobile:req.body.mobile,
          food :req.body.food,
          address :req.body. address
      });
      const savedata = await userdata.save();
            res.status(201).render("home");

    
}catch (error){
res.status(400),send(error)
}

});

app.listen(8000,()=>{
    console.log(`the server is running port no ${port}`);

});
