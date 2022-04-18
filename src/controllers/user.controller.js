const res = require("express/lib/response");
const mongoose = require("mongoose");
const sha256 = require("sha256")

const config = require("../config").default
const Product = require("../models/product.model")
const User = require("../models/user.model")

const userController = {
    //Tạo tài khoản
    register: async(req, res) => {
        const hashed = await sha256(req.body.password)
        const uniqueUser = await User.findOne({username: req.body.username})
        if(uniqueUser){
            return res.status(300).json("User Name tồn tại !")
        }
        else{
            const newUser = User({
                username: req.body.username,
                password: hashed,
                
            })
            const user = await newUser.save()
            if(!user){
                return res.status(404).json("Đăng kí không thành công !")
            }
            return res.status(200).json("Đăng kí thành công",user)
        }
    },
    //Đăng nhập
    login: async(req, res) => {
        try{
            const user = await User.findOne({username: req.body.username})
            if(!user){
                return res.status(404).json("Tài khoản không tồn tại.")
            }
            const hashed = await sha256(req.body.password)
            const isPassword = (user.password === hashed) ? true:false
            if(!isPassword){
                return res.status(404).json("Mật khẩu không chính xác.")
            }
            if(user && isPassword){
                return res.status(200).json(user)
            }
        }catch(err){
            return res.status(500).json(err)
        }
    },
    //Xem tất cả sản phẩm
    viewAll: async(req, res) => {
        const product = await Product.find()
        if(!product){
            return res.status(404).json("Không tìm thấy sản phẩm")
        }
        return res.status(200).json(product)
    },
    //Tìm một sản phẩm theo tên
    viewDetail: async(req, res) => {
        const product = await Product.findOne({id: req.params})
        if(!product){
            return res.status(404).json("Không tìm thấy sản phẩm")
        }
        return res.status(200).json(product)
    },
    cart: async(req, res) => {
        res.send('cart')
    },
}

module.exports = userController