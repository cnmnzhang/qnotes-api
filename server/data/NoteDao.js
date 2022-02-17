const Note = require("../model/Note");
const ApiError = require("../model/ApiError")

// Data access object
class NoteDao {
    constructor() {
        this.notes = [];
    }

    async create({ title, text }) {
        if (title === undefined || title === "") {
            throw new ApiError(400, "Every note must have a none-empty title!");
        }

        if (text === undefined) {
            throw new ApiError(400, "Every note must have a text attribute!");
        }
        const note = new Note(title, text);
        this.notes.push(note);
        return note;
    }

    async update(id, { title, text }) {
        const index = this.notes.findIndex((note) => note._id === id);

        if (index === -1) {
            throw new ApiError(404, "There is no note with the given ID!");
        }

        if (title !== undefined) {
            this.notes[index].title = title;
        }

        if (text !== undefined) {
            this.notes[index].text = text;
        }

        return this.notes[index];
    }

    async delete(id) {
        const index = this.notes.findIndex((note) => note._id === id);

        if (index === -1) {
            throw new ApiError(404, "There is no note with the given ID!");
        }
        
        const note = this.notes[index];
        this.notes.splice(index, 1);
        return note;
    }

    async read(id) {
        return this.notes.find((note) => note._id === id);
    }

    async readAll(query = "") {
        if (query !== "") {
            return this.note.filter(
                (note) => note.title.includes(query) || note.text.includes(query)
            );
        }
        return this.notes

    }


}

module.exports = NoteDao