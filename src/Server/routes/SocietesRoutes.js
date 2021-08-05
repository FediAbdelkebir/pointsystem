const societesController = require("../controllers/societesController");
const router = require("express").Router();

router.get('/', societesController.getAllSocietes);
router.get('/:id', societesController.getSocieteById);
router.post('/create', societesController.createSociete);
router.put('/:id', societesController.updateSociete);
router.delete('/:id', societesController.deleteSociete);


module.exports = router;