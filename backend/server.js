const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

/* Routes */
const usersDirections = require('./routes/User.routes');
const addressDirections = require('./routes/Adress.routes');
const customerDirections = require('./routes/Customer.routes');
const entityDirections = require('./routes/Entity.routes');
const companyDirections = require('./routes/Company.routes');
const collaboratorsDirections = require('./routes/Collaborators.route');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Requêtes GET //
app.get('/liste_clients/:currentEmail', customerDirections); // Sélectionne tous les clients de la BDD
app.get('/clients/:email', customerDirections); // Sélectionne un client spécifique
app.get('/clients/departure/:departureID', addressDirections); // Sélectionne une adresse de chargement précise
app.get('/clients/arrival/:arrivalID', addressDirections); // Sélectionne une adresse d'arrivée précise
app.get('/liste_entites/:companyId', entityDirections);
app.get('/liste_companys/:userId', companyDirections);
app.get('/liste_collaborators/:companyId', collaboratorsDirections);

// Requêtes DELETE //
app.delete('/clients/:email', customerDirections); // Supprimer un client

// Requêtes POST //
app.post('/clients/:email', customerDirections); // Modification des infos du client
app.post('/ajout_client', customerDirections); // Création d'un client
app.post('/connexion', usersDirections); // Connexion d'un utilisateur
app.post('/register', usersDirections); // Création d'un compte utilisateur
app.post('/clients/departure/:departureID', addressDirections); // Modification de l'adresse de chargement d'un client
app.post('/clients/arrival/:arrivalID', addressDirections); // Modification de l'adresse d'arrivée d'un client


app.listen(port, () => console.log('app running'));