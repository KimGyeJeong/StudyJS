const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        // const users = await User.find({});
        const users = await User.find();
        // res.render('mongoose', {users});
        res.json(users);
    } catch (err) {
        console.error('Fail to Connect to mongodb', err);
        next(err);
    }
});

module.exports = router;