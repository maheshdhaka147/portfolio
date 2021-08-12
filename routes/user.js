const express=require("express")
const router=express.Router()

// This part is here only for router demonstration purpose 
router.get("/",(req,res)=>{
    res.send("Welcome to the user home page")
})

router.post("/login",(req,res)=>{
    res.send("Login API")
})

router.post("/signup",(req,res)=>{
    res.send("Registration API")
})

module.exports=router