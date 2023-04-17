const User = require('../models/user')
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    console.log(req.body.name)
    const user = new User({
        name: req.body.name,
        type: req.body.type
    });

    try{
        const result = await user.save()
        res.json(result)
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err.message})
    }
})

module.exports = router
