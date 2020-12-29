const express = require('express');
const router = express.Router();

// controllers
const { getQueue, appendQueue } = require('../controllers/queueRoutes');

// routes
router.get('/:queue_name', getQueue);
router.post('/:queue_name', appendQueue);

module.exports = router;
