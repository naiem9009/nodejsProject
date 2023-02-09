const mongoose = require('mongoose');
require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, 
    { useNewUrlParser: true, useCreateIndex: true }
) 
    .then(() => console.log("Database connected!"))
        .catch(err => console.log(err));



