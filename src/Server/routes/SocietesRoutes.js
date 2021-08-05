const societesController = require("../controllers/societesController");
const router = require("express").Router();

router.get('/', societesController.getAllSocietes);
router.get('/societe/:id', societesController.getSocieteById);
router.post('/createsociete', societesController.createSociete);
router.put('/updatesociete/:id', societesController.updateSociete);
router.delete('/deletesociete/:id', societesController.deleteSociete);


module.exports = router;