const APIController = require("../controllers/APIController");
const router = require("express").Router();

router.get('/users', APIController.getAllUsers);

module.exports = router;