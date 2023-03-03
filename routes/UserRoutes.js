const express = require('express');
const router = express.Router();

// controller

const {register} = require('../controllers/userController');

// Middlewares
const validate = require('../middlewares/handleValidation')

// Routes
router.post('/register', validate, register);

module.exports = router;