    let express = require('express');
    const cors = require('cors');
    let path = require('path')
    let app = express();
    let PORT=3000;
    const roter=require("./Router/route");
    app.use(express.json());
    app.use(cors())
    app.use(express.static(path.join(__dirname, 'public')));
    
    let mongoose = require('mongoose');
// const { env } = require('process');

    mongoose.connect("mongodb+srv://Muhammad_Sheharyar:signature@cluster0.gqwbzi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {

    })

    .then(()=>{
        console.log("Connected to MongoDB");
    })   
    .catch((err)=>{
        console.log("Error connectiong to mongoDB",err)
    })

    app.use("/api",roter);



    app.listen(PORT,()=>{
    console.log("server is running")
})