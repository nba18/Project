const config = {
    app: {
        port: process.env.PORT || 8080,
    },
    DB: {
        url: process.env.url || "",
    }
};

module.exports = config;