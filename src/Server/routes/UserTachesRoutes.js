const usertachesController = require("../controllers/usertachesController");
const router = require("express").Router();

router.get('/', usertachesController.getAllUserTaches);
router.get('/usertaches/:id', usertachesController.getUserTachesById);
router.get('/listtaches/:iduser', usertachesController.getUserTaches);
router.post('/createusertaches', usertachesController.createUserTaches);
router.put('/updateusertaches/:id', usertachesController.updateUserTaches);
router.delete('/deleteusertaches/:id', usertachesController.deleteUserTaches);
router.delete('/deleteusertaches/:idtache/:iduser', usertachesController.deleteTaches);


module.exports = router;