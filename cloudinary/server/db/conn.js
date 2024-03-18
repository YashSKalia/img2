const mongoose = require("mongoose");

const DB="mongodb+srv://yashkalia4215:shailender@cluster0.qot1t0r.mongodb.net/users";

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("database connected")).catch((error)=> console.log("error",error))