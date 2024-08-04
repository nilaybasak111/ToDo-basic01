const { User } = require("../DataBase/dbschema")

// Middleware for handling User auth
function userMiddleware(req, res, next) {
    // Implement User Auth Logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username : username,
        password : password
    })
    .then (function(value){
        if(value) {
            next();
        } else {
            res.status(403).json({
                msg : "User Doesn't Exist",
            })
        }
    })
}

module.exports = userMiddleware;