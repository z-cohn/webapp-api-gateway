const express = require('express');
const app = express();
const mongoose = require('mongoose')
const DB_USER = process.env.DB_USER
const DB_PW = process.env.DB_PW
const DB_SERVER = 'music-db.azkod92.mongodb.net/music-db'
const dbURI = `mongodb+srv://${DB_USER}:${DB_PW}@${DB_SERVER}?retryWrites=true&w=majority`

console.log('TEST LOG')

mongoose.connect(dbURI)
    .then((result) => console.log('CONNECTION SUCCESSFUL'))
    .catch((err) => console.log(`CONNECTION FAILED: ${err}`))

app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.send('Hello World');
});



const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Listening on port ${port}...`));
