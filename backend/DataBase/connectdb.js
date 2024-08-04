const mongoose = require("mongoose")

// Connect to MongoDB Database
const connectdb = async ()=> {
    try {
        const connect = await mongoose.connect(process.env.DATABASE_URL);
        console.log(process.env.DATABASE_URL)
        //const connect = await mongoose.connect("mongodb+srv://lawxrencevelasco:PFW5i51ySAJHvAFx@basicreact.40nwuww.mongodb.net/");
        console.log("Connection is Established", connect.connection.host, connect.connection.name);
        console.log("DataBase Connected in connectdb.js");
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectdb;