const express = require('express');
const router = express.Router();


// @route   GET api/contact
// @desc    Get all users contact
//@access   Private
router.get('/',(req,res) => {
    res.send('Get all Contacts');
});

// @route   POST api/contact
// @desc    Add new contact
//@access   Private
router.post('/',(req,res) => {
    res.send('Add contact');
});

// @route   PUT api/contact/:id
// @desc    Update contact
//@access   Private
router.post('/:id',(req,res) => {
    res.send('Update Contacts');
});

// @route   Delete api/contact/:id
// @desc    Delete contact
//@access   Private
router.delete('/:id',(req,res) => {
    res.send('Delete Contacts');
});

module.exports = router;