const req = require("express/lib/request");
const mongoose = require("mongoose");
const SHA256 = require("sha256");

const Product = require("../models/product.model");
const User = require("../models/user.model");

const adminController = {
    //Thêm sản phẩm mới
    addProduct: async(req,res) => {
        const newProduct = Product({
            name: req.body.name,
            price: req.body.price,
            brand: req.body.brand,
            kind: req.body.kind,
            ram: req.body.ram,
            rom: req.body.rom,
            quanlity: req.body.quanlity,
            image: req.body.image,
            discount: req.body.discount,
        })
        const product = await newProduct.save();
        if(!product){
            res.status(403).json("Thêm thất bại")
        }
        res.status(200).json(product)
    },
    //Cập nhật sản phẩm
    updateProduct: async(req, res) => {
        const product = await Product.findByIdAndUpdate()
        if(!product){
            res.status(403).json("Cập nhật thất bại")
        }
        res.status(200).json(product)
    },
    //Xóa sản phẩm
    deleteProduct: async(req, res) => {
        try{
            const product = await Product.findByIdAndDelete(req.params.id)
            if(!product){
                return res.status(403).json("Không tồn tại sản phẩm")
            }
            return res.status(200).json("Thành công xóa !")
        }
        catch(err){
            res.status(500).json("Lỗi: ",err)
        }
    },
    //Xem danh sách User
    viewAllUser: async(req,res) => {
        try{
            const user = await User.find()
            if(!user){
                res.status(404).json("Không tìm thấy tài khoản")
            }
            res.status(200).json(user)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    //Cập nhật User
    updateUser: async(req, res) => {
        const user = await User.findByIdAndUpdate(
            req.params.id,req.body,{new: true}
        )
        if(!user){
            res.status(403).json("Cập nhật thất bại")
        }
        res.status(200).json(user)
    },
    //Xóa User
    deleteUser: async(req, res) => {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(403).json("Không thể xóa")
        }
        res.status(200).json("Xóa thành công")
    },
}

module.exports = adminController