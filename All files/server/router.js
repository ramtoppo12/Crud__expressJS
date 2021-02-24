let express = require('express');

let router = express.Router();

const customers = require('./controller.js');

router.post('/api/customer',customers.createCustomer);
router.get('/api/customer/:id',customers.getCustomer);
router.get('/api/customers',customers.allCustomers);
router.put('/api/customer/:id',customers.updateCustomer);
router.delete('/api/customer/:id',customers.deleteCustomer);


module.exports = router;
