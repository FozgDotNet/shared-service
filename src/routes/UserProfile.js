var express = require('express');
var core = require('../packages/core')


var router = express.Router();

/**
 * GET userProfile by id
 */
router.get('/:id', async function(req, res, next) {
  let id = req.params.id; 
  let _doc = await new core.UserProfile().findById(id);
  res.json(_doc);
});

router.post('/', async function(req, res, next) {
  let body = req.body;
  let _doc = await new core.UserProfile(body).save();
  res.json(_doc)
}) 

module.exports = router; 