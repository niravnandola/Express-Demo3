const express = require("express")
const router = express.Router()
const userData = require('../public/userData.json')
const auth = require("../middleware/auth")
const { getAllusers, userDetails, userResult } = require("../controllers/userController")

router.get("/", auth, getAllusers)
router.get("/details", auth, userDetails)

router.get("/result", auth,userResult)

module.exports = router