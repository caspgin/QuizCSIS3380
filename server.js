const express = require('express');
const enterData = require('./mongoose');

const port = process.env.PORT || 7000;
const app = express();


app.get("/",async (req,res)=>{
    try{
        let result = await enterData();
        console.log(result);
        res.json({ 
            "msg": "Successfully added name Abidali",
            "data": result
        });
    }catch(err){
        console.log(err);
        res.send(err);
    }
    
    
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})

