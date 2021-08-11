const UserPointsController = require("../controllers/userpointsController");
const router = require("express").Router();

router.get('/', UserPointsController.getAllUserPoints);
router.get('/userpoints/:id', UserPointsController.getUserPointsById);
router.get('/:iduser', UserPointsController.getoldpoints);
router.get('/finduser/:iduser', UserPointsController.findUser);
router.post('/createuserpoints', UserPointsController.createUserPoints);
router.put('/updateuserpoints/:iduser', UserPointsController.updateUserPoints);
router.delete('/deleteuserpoints/:id', UserPointsController.deleteUserPoints);


module.exports = router;