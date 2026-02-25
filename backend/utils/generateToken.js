const jwt = require("jsonwebtoken");


const generateToken = (res, userId) => {

    const token = jwt.sign({ id: userId }, process.env.jwt_token, {
        expiresIn: "24h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        // secure: true,
        secure: process.env.NODE_ENV === "production", // HTTPS only
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
    });


}


module.exports = generateToken;