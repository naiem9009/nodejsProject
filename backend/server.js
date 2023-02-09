require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const userRouter = require('./RouterController/UserRouter')

const PORT = process.env.PORT || 6500;


app.use(cors({
    origin: 'http://localhost:3000/*',
    methods: "PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', userRouter);




app.listen(PORT, (err) => {
    if (err) throw err;

    console.log(`Server is Connected on this port: ${PORT}`);
})