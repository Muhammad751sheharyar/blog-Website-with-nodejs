// const mongoose=require("mongoose");
const User = require("../dbschema/schema");
const hashy = require("hashy");
async function home(req, res) {
    try {
        const { Fname, Lname, Email, password } = req.body;
        hashy.hash(password, function (err, hash) {
            if (err) {
                return console.log(err);
            }
            console.log("generated password ", hash);
            const newUser = new User({ Fname, Lname, Email, password:hash });
            newUser.save();
            console.log(newUser);
            res.send({
                status: 200,
                message: "User added successfully",
            });
            console.log(Fname)

        })
        // res.send("HELLO WORLD")

    } catch (err) {
        res.send("ERROR")
        console.log(err)

    }
}
async function login(req, res) {
    try {
        const { Email, password } = req.body;
        const check = await User.findOne({ Email, password });
        console.log(check);
        res.send({
            message: "user successfully login"
        })
    } catch (err) {
        res.send(
            "Invalid user".err
        )

    }
}

function Name (req,res){
    let name = req.body;
    res.send(name);

}
module.exports = { home, login , Name}