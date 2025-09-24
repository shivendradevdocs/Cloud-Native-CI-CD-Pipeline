const express = require('express');
const router = express.Router();

// simple echo endpoint
router.post('/echo', (req, res) => {
  const { message } = req.body || {};
  if (!message) {
    return res.status(400).json({ error: 'message is required' });
  }
  return res.json({ messageReceived: message });
});

// sample data endpoint
router.get('/message', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

module.exports = router;
