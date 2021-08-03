const userController = require("../controllers/userController");
const router = require("express").Router();

router.get('/', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/create', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;