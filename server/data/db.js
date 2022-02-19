const mongoose = require("mongoose")

const URI = `mongodb+srv://czhan117:zRDR70URC1fR5KiO@quicknote.0vexa.mongodb.net/quickNoteDB?retryWrites=true&w=majority`;
// const URI = process.env.DB_URI;

async function connect() {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB!");
    } catch (err) {
        console.log(err);
    }
}

module.exports = { connect };