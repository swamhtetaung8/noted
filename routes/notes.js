var express = require('express');
const { getNotes, getNote, createNote, updateNote, deleteNote } = require('../controllers/noteController');
var router = express.Router();

/* Routes for notes CRUD */
router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
