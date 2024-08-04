const express = require("express");
const userMiddleware = require("../middlewares/user");
const { User } = require("../DataBase/dbschema");
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

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware , (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware , (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router