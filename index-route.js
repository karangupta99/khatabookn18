const express = require("express");

const router = express.Router();
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/register", function (req, res) {
  res.render("register");
});


router.post("/register",async function(req,res){
  try{
    let{name,username,email,password} = req.body
    let user = await usermodel.findOne({email})
    if(user) return res.send("u have already account please login")
  
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
         let createUser = await usermodel.create({
              name,
              username,
              email,
              password:hash
            })
            var token = jwt.sign({ email,id:createUser._id }, process.env.DEBUG);
            res.cookie("token",token)
            res.send("its working bro")
        });
        
    });
  }
 catch(err){
  console.log(err.message)
 }
})




module.exports = router;
