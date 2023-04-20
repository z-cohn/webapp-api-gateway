const User = require('../models/user')
const express = require('express')
const router = express.Router()
const mongo_funcs = require('../mongo/mongo.js')
const mongo_connect = mongo_funcs.mongo_connect
const mongo_disconnect = mongo_funcs.mongo_disconnect

router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        type: req.body.type
    });

    try{
        await mongo_connect()
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err)
        res.status(400).json({ message: err.message })
    } finally {
        await mongo_disconnect()
    }
})

router.get('/', async (req, res) => {
    try {
        await mongo_connect()
        const users = await User.find()
        res.json(users)
    } catch (err) {
        console.log(err)
        res.status(500).json({message: err.message})
    } finally {
        await mongo_disconnect()
    }
})

router.get('/id/:id', getUserById, (req, res) => {
    res.json(res.user)
})

async function getUserById(req, res, next) {
    let user = null
    try {
        if (!(mongoose.Types.ObjectId.isValid(req.params.id))) {
            return res.status(404).json( { message: 'No such user' } )
        }
        user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json( { message: 'No such user' } )
        }
    }
    catch (err) {
        return res.status(500).json( { message: err.message } )
    }

    res.user = user
    next()
}

router.get('/name/:name', getUserByName, (req, res) => {
    res.json(res.user)
})

async function getUserByName(req, res, next) {
    let user = null
    try {
        await mongo_connect()
        user = await User.find({ name: req.params.name })
        if (!user) {
            return res.status(404).json( { message: 'No such user' } )
        }
    }
    catch (err) {
        return res.status(500).json( { message: err.message } )
    } finally {
        await mongo_disconnect()
    }

    res.user = user
    next()
}

module.exports = router
