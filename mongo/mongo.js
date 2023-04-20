const mongoose = require('mongoose')
const DB_USER = process.env.DB_USER
const DB_PW = process.env.DB_PW
const DB_SERVER = process.env.DB_URI
const dbURI = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_SERVER}?retryWrites=true&w=majority`

async function mongo_connect() {
    try {
        await mongoose.connect(dbURI)
        console.log('CONNECTION SUCCESSFUL')
    } catch (err) {
        console.log(`CONNECTION FAILED: ${err}`)
        return err
    }
}

async function mongo_disconnect() {
    try {
        await mongoose.disconnect()
    } catch (err) {
        console.log(err)
    }
}

module.exports = { mongo_connect, mongo_disconnect }
