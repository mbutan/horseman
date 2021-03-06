// Standalone express app for handling internall requests from the worker

var express = require('express');
var job_helper = require("../helpers/job_helper");
var router = express.Router()
var debug = require('debug')('horseman:kennel:api');

// TODO: This function needs some form of access control
router.post('/callback', (req, res) => {
  try {
    job_helper.handlePostback(req.body);
  } catch (e) {
    debug(e);
  }
  res.status(204).json({});
});

router.get('/callback', (req, res) => {
  res.status(200).json({message: 'HELLO? YES THIS IS CALLBACK'});
});


module.exports = router;
