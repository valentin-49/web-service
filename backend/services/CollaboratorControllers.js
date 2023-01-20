let connection = require('../config/db')
const mysql = require('mysql2')
const response = require("../responses/Responses")

/* Regex */

class CollaboratorControllers {

    /**
     * Méthode permettant de requêter l'ensemble des Entités de la BDD
     * @param req
     * @param res
     * @param next
     * @return {promise<*>}
     */
    static all = async (req, res, next) => {
        try {
            const company = "SELECT * FROM collaborators WHERE company_id = ? "; 
            const companyId_retrieved = req.params.companyId;
            let selection_record = mysql.format(company, companyId_retrieved);

            connection.query(selection_record, (err, collaborators) => {
                if(err) {
                    throw err;
                }
                return response.ok(res, "Requête des companys bien effectuée", collaborators);
            });
        }catch (error) {
            return response.internalServer(res);
        }
    };
}

module.exports = CollaboratorControllers