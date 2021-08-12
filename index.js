const express=require("express")
const port=process.env.PORT || 8080
const app=express()

const user=require("./routes/user")

app.use("/user/",user)
app.use(express.static("static"))

app.get("/",(req,res)=>{
    res.send("Welcome to the home page")
})

app.all("*",(req,res)=>{
    res.status(404).send(`The resource is not available at ${req.url}`)
})

app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`)
})