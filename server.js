const express = require('express');
const enterData = require('./mongoose');

const port = process.env.PORT || 7000;
const app = express();


app.get("/",async (req,res)=>{
    const result = await enterData();
    res.json({ 
        "msg": "Successfully added name Abidali",
        "data": result
    });
})

app.listen(port, ()=>{
    console.log(`server running on ${port}`);
})
