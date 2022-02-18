const mongoose = require("mongoose")

const URI = `mongodb+srv://czhan117:zRDR70URC1fR5KiO@quicknote.0vexa.mongodb.net/quickNoteDB?retryWrites=true&w=majority`;

mongoose
    .connect(URI)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((err) => {
        console.log(err)
    })

const NoteSchema = new mongoose.Schema({
    title: { type: String },
    text: { type: String }
})

const Note = mongoose.model("Note", NoteSchema);

Note.create(
    {
        title: "faker..sentence()",
        text: "faker..paragraph()",
    },
    (err, note) => {
        console.log(err ? err : note);
    }
);

