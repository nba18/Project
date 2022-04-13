const mongoose = require("mongoose");

const usershema = mongoose.Schema(
    {
        //Tên đăng nhập
        username: {
            type: String,
            required: true,
            unique: true,
        },
        //Mật khẩu
        password: {
            type: String,
            required: true,
        },
        //Họ và tên
        HoTen: {
            type: String,
            required: true,
        },
        //Địa chỉ mail
        email: {
            type: String,
            lowercase: true,
            required: true,
        },
        //Địa chỉ
        address: String,
        //Số điện thoại
        phone: String,
        //Giới tính
        gender: Boolean,
        //Giỏ hàng
        cart: {
            type: Array,
            default: [],
        },
        //Đã mua
        bought: {
            type: Array,
            default: [],
        },
        //Tài khoản Admin
        admin: {
            type: Boolean,
            default: false,
        }
        
    },
    {timestamps: true}
);

usershema.method("toJSON", function(){
    const {__v, __id, ...object} = this.toObject();
    object.id = __id;
    return object;
});

module.exports = mongoose.model("user",usershema);
