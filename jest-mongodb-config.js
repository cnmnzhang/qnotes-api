module.exports = {
    mongodbMemoryServerOptions: {
        instance: {
            dbname: "jest",
        }, 
        binary: {
            version: "4.0.2",
            skipMD5: true,
        },
        autoStart: false,
    }
}