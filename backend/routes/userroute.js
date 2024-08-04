const express = require("express");
const userMiddleware = require("../middlewares/user");
const { User, Course } = require("../DataBase/dbschema");
const router = express.Router();

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    await User.create ({
        username : username,
        password : password,
    })
    res.json ({
        msg : "User Created Successfully",
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});
    //res.send(allCourses)
    res.json({
        courses : allCourses,
    })
});

router.post('/courses/:courseId', userMiddleware , async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    await User.updateOne({
        username : username,
    },{
        "$push" : {
            purchasedCourses : courseId,
        }
    })

    res.json({
        msg : `Purchase Complete and CourseId is ${courseId}`,
    })
});

router.get('/purchasedCourses', userMiddleware , async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username,
    });

    //console.log(user.purchasedCourses)
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses,
        }
    })
    res.json({
        courses : courses,
    })
});

module.exports = router