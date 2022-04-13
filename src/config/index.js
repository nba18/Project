const config = {
    app: {
        port: process.env.PORT || 8080,
    },
    DB: {
        uri: process.env.MONGODB_URI || "mongodb+srv://nba18:binhan2001@cluster0.6lfn3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    }
};

module.exports = config