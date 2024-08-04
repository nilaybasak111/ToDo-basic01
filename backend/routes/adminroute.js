const express = require("express");
const adminMiddlewar = require("../middlewares/admin");
const { Admin, Course } = require("../DataBase/dbschema");
const router = express.Router();

// Admun Routes
router.post("/signup", (req, res) =>{
    // Implement Admin Signup Logic
    const username = req.body.username;
    const password = req.body.password;
    
    // Check if a Admin with this username is already exists
    Admin.create({
        username : username,
        password : password,
    })
    .then(
        res.json({
            msg: "Admin Created Successfully",
        })
    )
    .catch(
        res.json({
            msg : "Admin is not Created"
        })
    )
});

router.post("/courses", adminMiddlewar, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const username = req.headers.username;
    
    // Do input validation with Zod

    // Creating Courses
    const newCourse = await Course.create({
        createdby : username,
        title : title,
        description : description,
        price : price,
        imageLink : imageLink,
    })
    
    res.json({
            msg: "A Course has been Created Successfully", CourseId : newCourse._id,
        })
    .catch(
        res.json({
            msg : "Course is not Created"
        })
    )
});

router.get("/courses", adminMiddlewar, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    res.json({
        courses : response,
    })
});

module.exports = router;