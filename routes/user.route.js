const express = require("express");
const { UserModel } = require("../model/user.model");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const UserRouter = express.Router()

UserRouter.post("/signup", async (req, res) => {
    const { email, password } = req.body
    try {
        bcrypt.hash(password, 4, async (err, hash) => {
            if (err) {
                res.send(err)
            }
            else {
                const user = new UserModel({ email, password: hash })
                await user.save()
                res.send({ "Msg": "User has been Registered" })
            }
        });
    } catch (er) {
        res.send({ "Msg": "User Registered Failed"})
        console.log(er)
    }
})

UserRouter.post("/login", async(req,res) => {
    const {email,password} = req.body
    try {
        const user = await UserModel.find({email})
        bcrypt.compare(password, user[0].password, (err, result) => {
            if(result){
                var token = jwt.sign({ foo: 'bar' }, "masai");
                res.send({"Msg":"Login Successful", "token": token})
            }
            else{
                res.send({"Msg":"Wrong Credntials"})
            }
        });
        
    } catch (er) {
        res.send({"Msg":"Wrong Credntials"})
        console.log(er);
    }
})

module.exports = {
    UserRouter
}