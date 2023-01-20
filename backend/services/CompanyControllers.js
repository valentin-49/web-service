let connection = require('../config/db')
const mysql = require('mysql2')
const response = require("../responses/Responses")

/* Regex */

class CompanyControllers {

    /**
     * Méthode permettant de requêter l'ensemble des Entités de la BDD
     * @param req
     * @param res
     * @param next
     * @return {promise<*>}
     */
    static all = async (req, res, next) => {
        try {
            const company = "SELECT * FROM company WHERE id = ? "; 
            const userId_retrieved = req.params.userId;
            let selection_record = mysql.format(company, userId_retrieved);

            connection.query(selection_record, (err, companys) => {
                if(err) {
                    throw err;
                }
                return response.ok(res, "Requête des companys bien effectuée", companys);
            });
        }catch (error) {
            return response.internalServer(res);
        }
    };
}

module.exports = CompanyControllers