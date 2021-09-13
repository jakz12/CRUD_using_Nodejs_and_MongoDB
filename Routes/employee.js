const router = require('express').Router();

const employeeController = require('../Controllers/employeeController');
const Employee = require('../Models/employeeModel');

router.get('/:employeeId?',employeeController.index);
router.post('/add',employeeController.add);
router.delete('/delete',employeeController.destroy);
router.post('/update',employeeController.update);

module.exports = router;
