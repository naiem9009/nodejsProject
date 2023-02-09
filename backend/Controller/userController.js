const User = require('../Modals/UserModal')


const registerController = async (req, res) => {
   const {name, address, blood, email, password} = req.body;

   const newUser = new User({
    name,
    address,
    blood,
    email,
    password
   })
   const user = await newUser.save();
   if (user) {
    console.log(user);
   }

   
}

const loginController = (req, res) => {
    res.send("Login PAge")
}


module.exports = {
    registerController,
    loginController
}