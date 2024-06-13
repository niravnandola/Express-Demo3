const userData= require("../public/userData.json")
module.exports = (req, res, next) => {
    console.log("middleware");
    
    if (!userData) {
        return res.status(404).json({
            massege: "User is not found"
        })
    }
    next()
}