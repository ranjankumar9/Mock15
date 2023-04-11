const jwt = require("jsonwebtoken")


const authenticate = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, "masai")
        const decoded = jwt.verify(token, "masai");
        if (decoded) {
            req.body.user = decoded.userID;
            next();
        } else {
            res.send({ msg: "Please Login first" });
        }
    } else {
        res.send({ msg: "Please Login first" });
    }

}

module.exports = {
    authenticate
};