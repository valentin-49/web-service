const router = require('express').Router();
const usersRoutes = require('../services/UserControllers');

router.post('/connexion', usersRoutes.connect); // Connexion d'un utilisateur
router.post('/register', usersRoutes.create); // Création d'un compte utilisateur

module.exports = router;