const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const config = require("./src/config")
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({ message: "Hello"})
})

const PORT = config.app.port;
const url = config.DB.url;
// mongoose.connect(url).then((res) => {
//     console.log(`ok`)
// }).catch((error) => {
//     console.log(`Loi`,error)
// })
app.listen(PORT, () => {
    console.log(`Sever is `)
})
