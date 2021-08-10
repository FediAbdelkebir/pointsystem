const UserPointsController = require("../controllers/userpointsController");
const router = require("express").Router();

router.get('/', UserPointsController.getAllUserPoints);
router.get('/userpoints/:id', UserPointsController.getUserPointsById);
router.post('/createuserpoints', UserPointsController.createUserPoints);
router.put('/updateuserpoints/:id', UserPointsController.updateUserPoints);
router.delete('/deleteuserpoints/:id', UserPointsController.deleteUserPoints);


module.exports = router;