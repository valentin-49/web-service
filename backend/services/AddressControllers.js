let connection = require('../config/db')
const mysql = require('mysql2')
const response = require("../responses/Responses");

/* Regex */
const postcode_regex = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
const place_regex = /^([a-zA-Z\u0080-\u024F]+(?:.|-||'))*[a-zA-Z\u0080-\u024F]*$/;

class Address {

    /**
     * Méthode permettant de requêter une adresse de chargement précise grâce à l'id de cette adresse
     * @param req Id de l'adresse
     * @param res Données de l'adresse ainsi récupérée
     * @param next
     * @returns {Promise<*>}
     */
    static oneCharging = async (req, res, next) => {
        try {
            const address_selection = "SELECT street, postcode, city, country, housing_type, area, volume, intern_notes FROM departure_adress WHERE id = ?;";
            let id_retrieved = req.params.departureID;
            let selection_record = mysql.format(address_selection, id_retrieved);

            connection.query(selection_record, function (err, oneAddress) {
                if (err) {
                    throw err
                }
                return res.status(200).json({message: "Adresse bien sélectionnée", data: oneAddress});
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }

    /**
     * Méthode permettant de requêter une adresse de livraison précise grâce à l'id de cette adresse
     * @param req Id de l'adresse
     * @param res Données de l'adresse ainsi récupérée
     * @param next
     * @returns {Promise<*>}
     */
    static oneArrival = async (req, res, next) => {
        try {
            const address_selection = "SELECT street, postcode, city, country, housing_type, area, volume, intern_notes FROM arrival_adress WHERE id = ?;";
            let id_retrieved = req.params.arrivalID;
            let selection_record = mysql.format(address_selection, id_retrieved);

            connection.query(selection_record, function (err, oneAddress) {
                if (err) {
                    throw err
                }
                return res.status(200).json({message: "Adresse bien sélectionnée", data: oneAddress});
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }

    /**
     * Méthode permettant de modifier une adresse de chargement précise grâce à l'id de cette adresse
     * @param req Id de l'adresse de chargement à modifier
     * @param res Confirmation de la bonne modification de l'adresse + données mises à jour
     * @param next
     * @returns {Promise<*>}
     */
    static modifyDeparture = async (req, res, next) => {
        try {
            let id_retrieved = req.params.departureID;
            let departure = req.body;

            // Vérification des REGEX des champs
            if (!postcode_regex.test(departure.departure_postcode) || !place_regex.test(departure.departure_city) || !place_regex.test(departure.departure_country)) {
                return response.badRequest(res, "regex non respectée");
            }
            const departure_modification = "UPDATE departure_adress SET street = ?, postcode = ?, city = ?, country = ?, housing_type = ?, area = ?, volume = ?, intern_notes = ? WHERE id=?;";
            const departure_modification_data = [departure.departure_street, departure.departure_postcode, departure.departure_city, departure.departure_country, parseInt(departure.departure_housing_type), parseInt(departure.departure_area), parseInt(departure.departure_volume), departure.departure_notes, parseInt(id_retrieved)];
            let modification_record = mysql.format(departure_modification, departure_modification_data);

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
     * Méthode permettant de modifier une adresse de livraison précise grâce à l'id de cette adresse
     * @param req Id de l'adresse de livraison à modifier
     * @param res Confirmation de la bonne modification de l'adresse + données mises à jour
     * @param next
     * @returns {Promise<*>}
     */
    static modifyArrival = async (req, res, next) => {
        try {
            let id_retrieved = req.params.arrivalID;
            let arrival = req.body;

            // Vérification des REGEX des champs
            //if (!postcode_regex.test(arrival.departure_postcode) || !place_regex.test(arrival.departure_city) || !place_regex.test(arrival.departure_country)) {
            //  console.log('Rgx : Adress Modify');
            //return response.badRequest(res, "regex non respectée");
            //}

            const arrival_modification = "UPDATE arrival_adress SET street = ?, postcode = ?, city = ?, country = ?, housing_type = ?, area = ?, volume = ?, intern_notes = ? WHERE id=?;";
            const arrival_modification_data = [arrival.arrival_street, arrival.arrival_postcode, arrival.arrival_city, arrival.arrival_country, parseInt(arrival.arrival_housing_type), parseInt(arrival.arrival_area), parseInt(arrival.arrival_volume), arrival.arrival_notes, parseInt(id_retrieved)];
            let modification_record = mysql.format(arrival_modification, arrival_modification_data);

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
}

module.exports = Address