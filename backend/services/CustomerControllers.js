let connection = require('../config/db')
const mysql = require('mysql2')
const response = require("../responses/Responses");

/* Regex */
const name_regex = /^([a-zA-Z\u0080-\u024F]+(?:.|-||'))*[a-zA-Z\u0080-\u024F]*$/;
const email_regex = /(^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$)/;
const phone_regex = /(^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$)/;
const postcode_regex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
const place_regex = /^([a-zA-Z\u0080-\u024F]+(?:.|-||'))*[a-zA-Z\u0080-\u024F]*$/;

class CustomerControllers {

    /**
     * Méthode permettant de requêter l'ensemble des clients de la BDD
     * @param req
     * @param res réponse contenant l'ensemble des clients de la BDD
     * @param next
     * @returns {Promise<*>}
     */
    static all = async (req, res, next) => {
        try {
            const customers = "SELECT * FROM customers WHERE user_email = ? ORDER BY lastname ASC";
            const userEmail_retrieved = req.params.currentEmail;
            let selection_record = mysql.format(customers, userEmail_retrieved);

            connection.query(selection_record, (err, clients) => {
                if (err) {
                    throw err;
                }
                return response.ok(res, "Requête de tous les clients bien effectuée", clients);
            });
        } catch (error) {
            return response.internalServer(res);
        }
    };

    /**
     * Méthode permettant de requêter un client spécifique
     * @param req l'email permettant d'identifier le client dans le BDD
     * @param res les données sur le client trouvé
     * @param next
     * @returns {Promise<*>}
     */
    static one = async (req, res, next) => {
        try {
            const customer_selection = "SELECT id, type, civility, lastname, firstname, email, phone, moving_date, date_flexible, source, inter_notes, departure_adress, arrival_adress FROM customers WHERE email = ?;";
            const email_retrieved = req.params.email;
            let selection_record = mysql.format(customer_selection, email_retrieved);

            connection.query(selection_record, function (err, oneClient) {
                if (err) {
                    throw err
                }
                return res.status(200).json({message: "Client bien sélectionné", data: oneClient});
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }

    /**
     * Méthode permettant de supprimer un client de la BDD
     * @param req Email récupéré du client en cliquant sur l'icône de suppression
     * @param res Confirmation de la suppression du client
     * @param next
     * @returns {Promise<*>}
     */
    static delete = async (req, res, next) => {
        try {
            const customer_deletion = "DELETE FROM customers WHERE email = ?;";
            const email_retrieved = req.params.email
            let deletion_record = mysql.format(customer_deletion, email_retrieved);

            connection.query(deletion_record, function (err, result) {
                if (err) {
                    response.internalServer(result, 'Erreur dans la requête SQL de suppression')
                } else {
                    return res.status(200).json({message: "Le client a bien été supprimé !"});
                }
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }

    /**
     * Méthode permettant de modifier les informations personnelles d'un client spécifique
     * @param req Email récupéré du client en cliquant sur l'icône de modification
     * @param res Confirmation de la bonne modification des informations
     * @param next
     * @returns {Promise<*>}
     */
    static modify = async (req, res, next) => {
        try {
            let email_retrieved = req.params.email
            let client = req.body;
            if (!name_regex.test(client.lastname) || !name_regex.test(client.firstname) || !email_regex.test(client.email) || !phone_regex.test(client.phone)) {
                return res.status(400).json({message: "regex non respectée"});
            }
            const customer_modification = "UPDATE customers SET type = ?, civility = ?, lastname = ?, firstname = ?, email = ?, phone = ?, moving_date = ?, date_flexible = ?, source = ?, inter_notes = ? WHERE email=?;";
            const customer_modification_data = [client.type, client.civility, client.lastname, client.firstname, client.email, client.phone, client.moving_date, client.flexible_date, client.source, client.customer_notes, email_retrieved];
            let modification_record = mysql.format(customer_modification, customer_modification_data);

            connection.query(modification_record, function (err, result) {
                if (err) {
                    throw err
                }
                return response.dbok(res, 'Arrivé au bout de la modification');
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }

    /**
     * Méthode permettant la création d'un client dans la BDD
     * @param req Données du formulaire rempli par l'utilisateur pour la création d'un client
     * @param res Confirmation de la bonne création d'un client
     * @param next
     * @returns {Promise<*>}
     */
    static create = async (req, res, next) => {
        try {
            let client = req.body;

            // if (!postcode_regex.test(client.departure_postcode) ||
            //    !place_regex.test(client.departure_city) ||
            //    !place_regex.test(client.departure_country) ||
            //    !postcode_regex.test(client.arrival_postcode) ||
            //    !place_regex.test(client.arrival_city) ||
            //    !place_regex.test(client.arrival_country) ||
            //    !name_regex.test(client.lastname) ||
            //    !name_regex.test(client.firstname) ||
            //    !email_regex.test(client.email) ||
            //    !phone_regex.test(client.phone)
            //) {
            //    console.log('Rgx : Customer Creation');
            //    return res.status(400).json({message: "regex non respectée"});
            //}

            let departure_id_retrieved = 0;
            let arrival_id_retrieved = 0;
            const creation_departure_adress = "INSERT INTO departure_adress (street, postcode, city, country, housing_type, area, volume, intern_notes) VALUES (?,?,?,?,?,?,?,?)";
            const creation_departure_adress_data = [client.departure_street, client.departure_postcode, client.departure_city, client.departure_country, parseInt(client.departure_housing_type), parseInt(client.departure_area), parseInt(client.departure_volume), client.departure_notes];
            let enregistrement_departure_adress = mysql.format(creation_departure_adress, creation_departure_adress_data);

            connection.query(enregistrement_departure_adress, function (err, result) {
                if (err) {
                    response.internalServer(result, 'Erreur dans la requête SQL de suppression')
                } else {
                    departure_id_retrieved = result.insertId
                    const creation_arrival_adress = "INSERT INTO arrival_adress (street, postcode, city, country, housing_type, area, volume, intern_notes) VALUES (?,?,?,?,?,?,?,?)";
                    const creation_arrival_adress_data = [client.arrival_street, client.arrival_postcode, client.arrival_city, client.arrival_country, parseInt(client.arrival_housing_type), parseInt(client.arrival_area), parseInt(client.arrival_volume), client.arrival_notes];
                    let enregistrement_arrival_adress = mysql.format(creation_arrival_adress, creation_arrival_adress_data);

                    connection.query(enregistrement_arrival_adress, function (err, result) {
                        if (err) {
                            response.internalServer(result, 'Erreur dans la requête SQL de suppression')
                        } else {
                            arrival_id_retrieved = result.insertId
                            const creation_customer = "INSERT INTO customers (type, civility, lastname, firstname, email, phone, moving_date, date_flexible, source, inter_notes, departure_adress, arrival_adress, user_email) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
                            const creation_customer_data = [parseInt(client.type), parseInt(client.civility), client.lastname, client.firstname, client.email, client.phone, client.moving_date, parseInt(client.flexible_date), parseInt(client.source), client.customer_notes, departure_id_retrieved, arrival_id_retrieved, client.currentEmail];
                            let enregistrement_customer = mysql.format(creation_customer, creation_customer_data);

                            connection.query(enregistrement_customer, function (err, result) {
                                if (err) {
                                    response.internalServer(result, 'Erreur dans la requête SQL de suppression')
                                } else {
                                    return response.dbok(res, 'Création du client terminée !');
                                }
                            })
                        }
                    })
                }
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }
}

module.exports = CustomerControllers