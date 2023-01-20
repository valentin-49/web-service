let connection = require('../config/db')
const mysql = require('mysql2')
const response = require("../responses/Responses")

/* Regex */

class EntityControllers {

    /**
     * Méthode permettant de requêter l'ensemble des Entités de la BDD
     * @param req
     * @param res
     * @param next
     * @return {promise<*>}
     */
    static all = async (req, res, next) => {
        try {
            const entity = "SELECT * FROM entitys WHERE company_id = ? ORDER BY name_social ASC";
            const companyId_retrieved = req.params.companyId;
            let selection_record = mysql.format(entity, companyId_retrieved);

            connection.query(selection_record, (err, entitys) => {
                if(err) {
                    throw err;
                }
                return response.ok(res, "Requête des entités bien effectuée", entitys);
            });
        }catch (error) {
            return response.internalServer(res, "error");
            
        }
    }; 


    /**
     * Méthode permettant la création d'une entité dans la BDD
     * @param req Données du formulaire rempli par l'utilisateur pour la création d'une entité
     * @param res Confirmation de la bonne création d'une entité
     * @param next
     * @returns {Promise<*>}
     */
    static create = async (req, res, next) => {
        

    };

}

module.exports = EntityControllers