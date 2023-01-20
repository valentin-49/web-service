const router = require('express').Router();
const addressRoutes = require('../services/AddressControllers');
const authentication = require('../middleware/Authentication');

router.get('/clients/departure/:departureID', addressRoutes.oneCharging) // Sélectionne une adresse de chargement spécifique
router.get('/clients/arrival/:arrivalID', addressRoutes.oneArrival) // Sélectionne une adresse d'arrivée spécifique
router.post('/clients/departure/:departureID', authentication, addressRoutes.modifyDeparture) // Modification de l'adresse de chargement du client sélectionné
router.post('/clients/arrival/:arrivalID', authentication, addressRoutes.modifyArrival) // Modification de l'adresse d'arrivée du client sélectionné

module.exports = router;