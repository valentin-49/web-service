const router = require('express').Router();
const entityRoutes = require('../services/EntityControllers');
const authentication = require('../middleware/Authentication');

router.post('/ajout_entites', entityRoutes.create) // création d'une nouvelle entité
router.get('/liste_entites/:companyId', entityRoutes.all) // Sélectionne toutes les entités de l'utilisateur connecté


module.exports = router;