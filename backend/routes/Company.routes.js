const router = require('express').Router();
const companyRoutes = require('../services/CompanyControllers');
const authentication = require('../middleware/Authentication');

router.get('/liste_companys/:userId', companyRoutes.all) // Sélectionne toutes les companys de l'utilisateur connecté

module.exports = router;