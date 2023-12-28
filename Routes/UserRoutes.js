const express = require('express');

const { update , get, getAll}  = require( '../controllers/UserController.js');

const router = express.Router();
router.get('/', get);
router.get('/download', getAll);
router.post('/:id', update);
module.exports = { router};