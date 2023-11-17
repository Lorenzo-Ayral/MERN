const Note = require('../models/Note');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// @desc    Get all notes
// @route   GET /notes
// @access  Private
const getAllNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find().lean().exec();

    if (!notes?.length) {
        return res.status(400).json({message: 'No notes found'});
    }

    const notesWithUser = await Promise.all(notes.map(async (note) => {
        const user = await User.findById(note.user).lean().exec()
        return { ...note, username: user.username }
    }))

    res.json(notesWithUser);
})

// @desc   Create a note
// @route   POST /notes
// @access  Private
const createNewNote = asyncHandler(async (req, res) => {
    const {user, title, text} = req.body;

    // Confirm data
    if (!user || !title || !text) {
        return res.status(400).json({message: 'All fields are required'});
    }

    // Check duplicate
    const duplicate = await Note.findOne({title}).lean().exec();
    if (duplicate) {
        return res.status(400).json({message: "Duplicate note title"});

    }

    const note = await Note.create({user, title, text})

    if (note) {
        res.status(201).json({message: `New note ${title} created`});
    } else {
        res.status(400).json({message: 'Invalid note data'})
    }
})

// @desc    Update a note
// @route   PATCH /notes
// @access  Private
const updateNote = asyncHandler(async (req, res) => {

})

// @desc    Delete a note
// @route   DELETE /notes
// @access  Private
const deleteNote = asyncHandler(async (req, res) => {

})

module.exports = {
    getAllNotes,
    createNewNote,
    updateNote,
    deleteNote
}