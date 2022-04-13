const mongoose = require("mongoose");

const productschema = mongoose.Schema(
    {
        //Tên sản phẩm
        name: {
           type: String,
            require: true,
       },
       //Giá
       price: {
           type: Number,
           require: true,
       },
       //Thương hiệu
       brand: {
           type: String,
           require: true,
       },
       //Loại điện thoại
       kind: {
           type: String,
           require: true,
       },
       //Dung lượng ram
       ram: {
            type: Number,
            require: true,
       },
       //Bộ nhớ trong
       rom: {
           type: Number,
           require: true,
       },
       //Số lượng
       quanlity: {
           type: Number,
           require: true,
       },
       //Hình ảnh
       image: {
           type: String,
           require: true,
       },
       //Giảm giá
       discount: {
            type: Number,
            require: true,
       },
    },
    {timestamps: true}
)

module.exports = mongoose.model("productSchema", productschema);