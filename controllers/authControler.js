const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const user = require("../models/usermodel");

const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashedpassword = await bcrypt.hash(password, 10);

        const newuser = new user({ username, password: hashedpassword, role });
        await newuser.save();
        res.status(201).json({ message: `user registered with username ${username}` });
    } catch (error) {
        res.status(500).json({ message: "something went wrong" });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existingUser = await user.findOne({ username }); // Use findOne instead of find

        if (!existingUser) {
            return res.status(404).json({ message: `user with username ${username} not found` });
        }

        const isMatch = await bcrypt.compare(password, existingUser.password); // Use existingUser.password
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: existingUser._id, role: existingUser.role }, // Use existingUser
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "something went wrong" }); // Fix typo in "message"
    }
};

module.exports = {
    register,
    login,
};