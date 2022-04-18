const config = {
    app: {
        port: process.env.PORT || 8080,
    },
    DB: {
        url: process.env.MONGODB_URL || "mongodb+srv://nba18:binhan2001@cluster0.6lfn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    }
};

module.exports = config