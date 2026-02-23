const jwt = require("jsonwebtoken");


const generateToken = (res, userId) => {

    const token = jwt.sign({ id: userId }, process.env.jwt_token, {
        expiresIn: "24h",
    });

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });


}


module.exports = generateToken;