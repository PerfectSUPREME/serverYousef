const UserModule = require("../modules/UserModules")

// app.post('/CreateUser', 
const  CreateUser  = async (req, res) => {
    try {
        const { user_name, Password ,phonenumber ,Age} = req.body

        const newUser = await UserModule.create({
            userName:user_name,
            "Password": Password,
            "phonenumber": phonenumber,
            "Age": Age,
        })
        res.status(200).json({
            user:newUser,
        })
    }
    catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}

 const DeleteUser = async (req, res) => {
    try {
        const { user_name,} = req.body

        const response = await UserModule.deleteOne({userName:user_name})
        res.status(200).json({
            response:response,
        })
    }
    catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}

const  findAllUser  = async (req, res) => {
    try {
        const allUser = await UserModule.find({})
        res.status(200).json({
            user:allUser,
        })
    }
    catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}
 
const login = async (req, res) => {
    const { userName, Password } = req.body;
    try {
        const user = await UserModule.findOne({ userName });
        if (!user) {
            return res.status(401).json({ success: false, errorMessage: "No such user" });
        }
        if (user.Password !== Password) {
            return res.status(401).json({ success: false, errorMessage: "Incorrect Password" });
        }
        res.status(200).json({ success: true, user: user });
    } catch (error) {
        res.status(500).json({ success: false, errorMessage: error.message });
    }
};
        
module.exports = {
    DeleteUser,
    CreateUser,
    findAllUser,
    login,
}
