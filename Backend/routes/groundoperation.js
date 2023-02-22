const router = require('express').Router();

//Imports
const { getDay, putGOInput } = require('../controllers/ground_operation.js');
const { noMethod } = require('../controllers/errorHandler');
const { authJWTMWAdmin, authJWTMW } = require('../middleware/authJWT.js');

//Endpoints
router.get('/', authJWTMW, getDay)
router.get('/:day', getDay)
router.post('/', authJWTMWAdmin, putGOInput);


router.use(noMethod);

module.exports = router;