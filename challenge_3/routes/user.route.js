const express = require('express')
const router = express.Router();

const { postUser } = require('../controllers/user.controller')

router.post('/user', postUser)

module.exports = router;