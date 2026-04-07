let notes = [];

module.exports = {
    getNotes: () => notes,

    addNote: (note) => {
        notes.push(note);
    },

    deleteNote: (index) => {
        notes.splice(index, 1);
    },

    updateNote: (index, note) => {
        notes[index] = note;
    },

    getNote: (index) => {
        return notes[index];
    }
};