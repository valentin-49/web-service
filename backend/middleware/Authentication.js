const jwt = require('jsonwebtoken');
let connection = require('../config/db')
const response = require('../responses/Responses');
const mysql = require("mysql2");
const token_regex = /^[\w'\-,_.0-9][^\\#$%ˆ&*{}|~<>[\]]{180,265}$/;

/**
 * Méthode d'authentification de l'utilisateur connecté, grâce au token d'authentification, pour sécuriser toutes les méthodes de requête
 * @param req Token d'authentification récupéré
 * @param res Confirmation de l'authentification ou refus de l'authentification
 * @param next Passage à la méthode du controller appelé
 * @returns {Promise<*>}
 */
module.exports = (req, res, next) => {
    if (req.headers.authorization === null || req.headers.authorization === undefined || req.headers.authorization === 'undefined') {
        return response.badRequest(res, 'Veuillez vous reconnecter !');
    } else {
        const token = req.headers.authorization.replace('Bearer ', '');
        try {
            //if (!token_regex.test(token)) {
            //   console.log('rgx : token Authentication');
            //    return response.badRequest(res, 'Regex non respectée pour le token !');
            //}

            const decodedToken = jwt.verify(token, 'crgjCEpmZ9m3LC4T0nD09UZX0oGEOHui2V3fuGEsodDYqi09l5AUSGbZ92jCbM1dhX7twB');
            const token_id = decodedToken.id;
            let decoded_user_id = [token_id];
            let get_id = 'SELECT COUNT(id) FROM users WHERE id=?';
            let get_id_record = mysql.format(get_id, decoded_user_id);

            connection.query(get_id_record, function (err, result) {
                if (err) {
                    return response.internalServer(res, 'Erreur SQL');
                } else if (result[0]['COUNT(id)'] !== 1) {
                    return response.internalServer(res, 'Authentification erronée !');
                } else {
                    next();
                }
            })
        } catch (error) {
            return response.internalServer(res, 'Reconnectez-vous');
        }
    }
}



