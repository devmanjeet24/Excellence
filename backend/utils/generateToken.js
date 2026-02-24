const jwt = require("jsonwebtoken");


const generateToken = (res, userId) => {

    const token = jwt.sign({ id: userId }, process.env.jwt_token, {
        expiresIn: "24h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });


}


module.exports = generateToken;