const express = require('express');
const router = express.Router();
const controller = require('../controller/controller_product');

router.get('/', controller.list)
router.get('/:id', controller.getById)
router.post('/', controller.create)
router.delete('/:id', controller.deleteProduct)

module.exports = router;