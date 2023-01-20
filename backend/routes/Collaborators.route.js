const router = require('express').Router();
const collaboratorroutes = require('../services/CollaboratorControllers.js');
const authentication = require('../middleware/Authentication');

router.get('/liste_collaborators/:companyId', collaboratorroutes.all) // Sélectionne tous les collaboraterus de l'utilisateur connecté

module.exports = router;