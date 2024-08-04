const { Admin } = require("../DataBase/dbschema")

// Middleware for handling Admin auth
function adminMiddleware(req, res, next) {
    // Implement Admin Auth Logic
    // You need to check the headers and validate the admin from the admin DB.
    // Check readme for the exact headers to be expected.
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username : username,
        password : password
    })
   
    .then (function(value){
        console.log(value)
        if(value) {
            next();
        } else {
            res.status(403).json({
                msg : "Admin Doesn't Exist",
            })
            console.log("Admin Doesn't Exist")
        }
    }) 
}

module.exports = adminMiddleware; 