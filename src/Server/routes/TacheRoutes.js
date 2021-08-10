const tacheController = require("../controllers/tacheController");
const router = require("express").Router();

router.get('/', tacheController.getAllTaches);
router.get('/tache/:id', tacheController.getTacheById);
router.post('/createtache', tacheController.createTache);
router.put('/updatetache/:id', tacheController.updateTache);
router.put('/ValiderTache/:id', tacheController.Valider);
router.delete('/deletetache/:id', tacheController.deleteTache);


module.exports = router;