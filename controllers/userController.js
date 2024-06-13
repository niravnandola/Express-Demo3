const userData = require('../public/userData.json')
const bodyParser = require("body-parser")
exports.getAllusers = (req, res) => {


    return res.json({
        massege: "User is fetched",
        data: userData
    })

}

exports.userDetails = (req, res) => {
    const userName = req.query.name
    const fetchData = userData.find(user => user.name == userName)

    return res.status(200).json({
        massege: "User is fetched",
        data: fetchData
    })
}

exports.userResult = (req, res) => {

    const userResult = userData.find(user => user.name == req.query.name)
    const { acoount, ecconomic, english, ba, stat, sp, gujrati } = userResult?.marks
    const result = (acoount + ecconomic + english + ba + stat + sp + gujrati) / 7

    return res.status(200).json({
        massege: "Result is fetched",
        data: result
    })
}