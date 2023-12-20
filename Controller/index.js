const SignUp = require("../models/signup/index");


const signUp = (req, res) => {

    const userData = req.body;

    const savedData = new SignUp({
        username: userData.username,
        password: userData.password,
    });
    const result = savedData.save();

};


const login = async (req, res) => {
    try {

        const loginData = req.body;
        // get value database value comparing
        const data = await SignUp.findOne({ username: loginData.username });

        if (data.username === loginData.username && data.password === loginData.password) {
            res.status(200).json({ message: "User is Valid" })
        } else {
           return res.status(404).json({message: "User is Invalid"})
        }

        console.log(data);

    } catch (error) {
        console.log(error)

    }


}

module.exports = {
    signUp,
    login,
}