const mongoose = require('mongoose');

const uri = process.env.LOCAL_URI;
function enterData(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(uri, { useNewUrlParser: true,  useUnifiedTopology: true   }
            );
        const connection = mongoose.connection;
        connection.once('open', () => {
        console.log("MongoDB database connection established successfully");
        })
        
        const Schema = mongoose.Schema;
    
        // Create a Schema object
        const todoSchema = new Schema({
        name: { type: String, required: true },
        sid: { type: String, required: true },
        });
    
        const Quiz = mongoose.model("Examrecord", todoSchema);
    
        const abi = new Quiz({
            "name":"Abidali Sarangwala",
            "sid":"300347885"
        })
    
        abi.save().then((data)=>{
            console.log("Succesfully added data");
            mongoose.connection.close();
            resolve(data);
        }).catch((err)=>{
            reject(err);
        })
    })
    
}

module.exports = enterData