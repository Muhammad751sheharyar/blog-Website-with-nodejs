// const mongoose=require("mongoose");
const User = require("../dbschema/schema");
const hashy = require("hashy");
const UserBlog=require("../dbschema/blogSchema");
async function home(req, res) {
    try {
        const { Fname, Lname, Email, password } = req.body;
        hashy.hash(password, function (err, hash) {
            if (err) {
                return console.log(err);
            }
            console.log("generated password ", hash);
            const newUser = new User({ Fname, Lname, Email, password: hash });
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
        const check = await User.findOne({ Email });
        console.log(check)  
        hashy.verify(password, check.password, function (error, success) {
            if (error) {
                return console.error(error);
            }

            if (success) {
                res.send("you are now authenticated!");
            } else {
                res.send("invalid password!");
            }
        });
        console.log("user login successfuly");
    } catch (err) {
        res.send(
            "Invalid user", err
        )

    }
}

async function Create(req,res){
  try{
    const{blogTittle,blogdesc,Author}=req.body;
  const blogSave=new UserBlog({blogTittle,blogdesc,Author});
  blogSave.save();
  res.send({
    message:"blog successfully create"
  })
  console.log("blog successfully created");

  }catch(err){

    console.log(err)

  }
  
}

module.exports = { home, login,Create}