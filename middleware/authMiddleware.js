const jwt = require("jsonwebtoken");

// Middleware to verify token
const verifyToken = (req, res, next) => {
    if (!res || typeof res.status !== "function") {
        console.error("Response object is not properly initialized.");
        return; // Exit early if res is not valid
    }
    let token;
    let authHeader = req.headers && (req.headers.Authorization || req.headers.authorization); // Ensure req.headers exists
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1]; // Fix split logic to use a space
        if (!token) {
            return res.status(401).json({ message: "No token, authorization denied" });
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET); // Fix typo in JWT_SECRET
            req.user = decode;
            console.log("The decoded user is: ", req.user);
            next();
        } catch (error) {
            res.status(400).json({ message: "Token is not valid" });
        }
    } else {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
};

// Middleware to authorize roles
const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next();
    };
};

module.exports = { verifyToken, authorizeRoles };