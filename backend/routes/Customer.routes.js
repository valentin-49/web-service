const router = require('express').Router();
const customerRoutes = require('../services/CustomerControllers');
const authentication = require('../middleware/Authentication');

router.post('/ajout_client', customerRoutes.create) // Création d'un client
router.post('/clients/:email', authentication, customerRoutes.modify) // Modification des informations personnelles du client
router.delete('/clients/:email', customerRoutes.delete) // Supprimer le client
router.get('/clients/:email', customerRoutes.one) // Sélectionne un client spécifique
router.get('/liste_clients/:currentEmail', customerRoutes.all) // Sélectionne tous les clients de l'utilisateur connecté

module.exports = router;