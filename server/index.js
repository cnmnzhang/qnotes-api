const express = require("express");
// const faker = require("faker");
const NoteDao = require("./data/NoteDao");
const app = express();
const port = process.env.PORT || 5001;

const NUM_SAMPLES = 3;
const notes = new NoteDao();
for (let i = 0; i< NUM_SAMPLES; i++) {
    notes.create({
        // title: faker.lorem.sentence(),
        // text: faker.lorem.paragraph(),

        title: "faker.lorem.sentence()",
        text: "faker.lorem.paragraph()",
    });
}

app.get("/", (req, res) => {
    res.send("QuickNote API!")
});

app.listen(port, () => {
    console.log(`Express app listening at port: http://localhost:${port}/`);
});

app.get("/api/notes", async (req, res) => {
    const data = await notes.readAll();
    res.json({ data });
})