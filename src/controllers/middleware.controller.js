const req = require('express/lib/request')
const User = require('../models/user.model')

const middlewareController = {
    verify: (req, res, next) => {
        if(req.user.admin){
            next()
        }else{
            res.status(401).json("Bạn không có quyền truy cập !")
        }
    }
}

module.exports = middlewareController