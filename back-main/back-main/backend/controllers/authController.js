// controllers/authController.js
const Tourist = require('../models/Tourist');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerTourist = async (req, res) => {
    const { name, passportId, password } = req.body;

    if (!name || !passportId || !password) {
        return res.status(400).json({ message: 'All fields required' });
    }

    try {
        const existing = await Tourist.findOne({ passportId });
        if (existing) return res.status(409).json({ message: 'Already registered' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newTourist = new Tourist({ name, passportId, password: hashedPassword });
        await newTourist.save();

        res.status(201).json({ message: 'Tourist registered', tourist: newTourist });
    } catch (err) {
        res.status(500).json({ message: 'Registration failed', error: err.message });
    }
};

exports.loginTourist = async (req, res) => {
    const { passportId, password } = req.body;

    if (!passportId || !password) {
        return res.status(400).json({ message: 'Passport ID and password required' });
    }

    try {
        const tourist = await Tourist.findOne({ passportId });
        if (!tourist) return res.status(404).json({ message: 'Tourist not found' });

        const isMatch = await bcrypt.compare(password, tourist.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign(
            { id: tourist._id, passportId: tourist.passportId },
            process.env.JWT_SECRET,
            { expiresIn: '12h' }
        );

        res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};
