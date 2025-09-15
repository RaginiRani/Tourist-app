// middlewares/validateTourist.js
exports.validateTourist = (req, res, next) => {
    const { name, passportId, password } = req.body;
    if (!passportId || !password || (req.path.includes('register') && !name)) {
        return res.status(400).json({ message: 'All fields required' });
    }
    next();
};
