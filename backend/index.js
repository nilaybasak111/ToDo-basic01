const dotenv = require("dotenv")
dotenv.config({ path: '../.env'});

const { Admin } = require("../backend/DataBase/dbschema")

const express = require("express");
const bodyParser = require("body-parser");
const connectdb = require("./DataBase/connectdb");
const adminroute = require("./routes/adminroute")
const userroute = require("./routes/userroute")
const app = express();


// Middlewares for Parsing Request Bodies
const abc = process.env.SECRET
console.log(abc)
connectdb();
app.use(bodyParser.json());
app.use("/admin", adminroute);
app.use("/user", userroute);

app.get("/create", (req,res) => {
    const testsave = new Admin ({
        username : "nil007",
        password : "888",
    })
    testsave.save().then(
        res.send("okkk")
    );
    console.log("jjjjjjj")
    //res.send("Helllo");
})

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Server is Running on ${PORT}`);
})


// 1:00:00