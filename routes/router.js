const express = require('express');
const router =  express.Router();

const { getAll, create, getId } = require('../controllers/controllers');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/getall', getAll);
router.post('/create', create);
router.get('/getId/:id', getId);

module.exports = router;