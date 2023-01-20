let connection = require('../config/db');
const mysql = require('mysql2');
const response = require('../responses/Responses');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Regex */
const email_regex = /(^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$)/;
const password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z.?,!:;*éàèù'"~&@\/$%=[()\]^\-\d]{8,}$/;

class UserControllers {

    /**
     * Méthode permettant la création d'un compte utilisateur
     * @param req les données du formulaire soumis par l'utilisateur
     * @param res la réponse envoyée
     * @param next
     * @returns {Promise<*>}
     */
    static create = async (req, res, next) => {
        try {
            let user = req.body;
            const myPlaintextPassword = user.password;
            let hashedPassword;

            // On sélectionne tous les emails de la table users de la BDD
            const email_presence_verification = 'SELECT id, email FROM users;';
            let email_presence_verification_record = mysql.format(email_presence_verification);

            connection.query(email_presence_verification_record, function (err, result) {
                if (err) {
                    return response.badRequest(res, 'Erreur de récupération des emails de la BDD');
                }

                // On compare les emails de la table users avec l'email de register
                else if (result) {
                    let userFound = false;
                    for (let oneMail = 0; oneMail < result.length; oneMail++) {
                        if (user.email === result[oneMail].email) {
                            userFound = true;
                            return response.wrong(res, 'Compte déjà existant avec cette adresse mail');
                        } else {

                            // Cryptage du mot de passe de l'utilisateur
                            bcrypt.genSalt(saltRounds, function (err, salt) {
                                bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                                    if (err) {
                                        return response.badRequest(res, 'Erreur dans la méthode de cryptage');
                                    } else {
                                        hashedPassword = hash

                                        // Construction et application de la requête SQL
                                        const creation_user = "INSERT INTO users (company, name, siret, job, postcode, city, adress, phone, email, password) VALUES (?,?,?,?,?,?,?,?,?,?)";
                                        const creation_user_data = [user.company, user.name, user.siret, user.job, user.postcode, user.city, user.adress, user.phone, user.email, hashedPassword];
                                        let record_user = mysql.format(creation_user, creation_user_data);

                                        connection.query(record_user, function (err, result) {
                                            if (err) {
                                                return response.badRequest(res, 'Erreur dans la construction ou application de la BDD');
                                            } else {
                                                return response.dbok(res, 'Arrivé au bout de la création');
                                            }
                                        })
                                    }
                                })
                            })
                        }
                    }
                }
            })
        } catch (error) {
            return response.internalServer(res);
        }
    }

    /**
     * Méthode permettant à un utilisateur de se connecter avec un compte utilisateur
     * @param req Les données du formulaire soumis par l'utilisateur (email et mot de passe)
     * @param res réponse envoyée (token d'identification et informations du compte)
     * @param next
     * @returns {Promise<*>}
     */
    static connect = async (req, res, next) => {
        try {
            const login_data = {
                email: req.body.email,
                password: req.body.password
            }

            // Vérification REGEX des champs
            if (!email_regex.test(login_data.email) /*|| !password_regex.test(login_data.password)*/) {
                return response.badRequest(res, 'ERREUR : IDENTIFIANTS DE CONNEXION INCORRECT');
            } else {

                // On sélectionne tous les emails de la BDD pour comparer avec l'action de Login
                const email_presence_verification = 'SELECT id, email, password FROM users;';
                let email_presence_verification_record = mysql.format(email_presence_verification);

                connection.query(email_presence_verification_record, function (err, result) {
                        if (err) {
                            return response.badRequest(res, 'Erreur de récupération des emails de la BDD');
                        }

                        // On compare les emails de la BDD avec l'email de login
                        else if (result) {
                            let userFound = false;
                            for (let oneMail = 0; oneMail < result.length; oneMail++) {
                                if (login_data.email === result[oneMail].email) {
                                    userFound = true;
                                    const user_id = result[oneMail].id
                                    const hash_password_retrieved = "SELECT password FROM users WHERE id='" + user_id + "'";
                                    let password_verification = mysql.format(hash_password_retrieved);

                                    connection.query(password_verification, function (err, result) {
                                        if (err) {
                                            return response.badRequest(res, 'Erreur de récupération des passwords hashés de la BDD');
                                        } else if (result) {
                                            bcrypt.compare(login_data.password, result[0].password)
                                                .then(valid => {
                                                    if (!valid) {
                                                        return response.wrong(res, 'Mot de passe incorrect');
                                                    } else if (valid) {
                                                        const user_recuperation = "SELECT company, company_id, id, name, siret, job, postcode, city, adress, phone, email, password FROM users WHERE email = ?;";
                                                        let data = login_data.email;
                                                        let recuperation_infos = mysql.format(user_recuperation, data);

                                                        connection.query(recuperation_infos, function (err, result) {
                                                            if (err) {
                                                                return response.badRequest(res, 'Récupération des données du client impossible');
                                                            } else if (result) {
                                                                let dataUser = {
                                                                    company: result[0].company,
                                                                    company_id: result[0].company_id,
                                                                    name: result[0].name,
                                                                    id: result[0].id,
                                                                    siret: result[0].siret,
                                                                    job: result[0].job,
                                                                    postcode: result[0].postcode,
                                                                    city: result[0].city,
                                                                    adress: result[0].adress,
                                                                    phone: result[0].phone,
                                                                    email: result[0].email,
                                                                }
                                                                let g = '' + Date.now();

                                                                for (let i = 0; i < 50; i++) {
                                                                    let possibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                                                                    g += possibilities.charAt(Math.floor(Math.random() * 90));
                                                                }
                                                                let token = jwt.sign({
                                                                    id: user_id,
                                                                    random_key: g,
                                                                    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 168 // 1 week 168
                                                                }, 'crgjCEpmZ9m3LC4T0nD09UZX0oGEOHui2V3fuGEsodDYqi09l5AUSGbZ92jCbM1dhX7twB');
                                                                let tokenLength = token.length
                                                                let tokenPartOne = token.substring(0, Math.round(tokenLength / 2));
                                                                let tokenPartTwo = token.substring(Math.round(tokenLength / 2), tokenLength);

                                                                if (tokenPartOne && tokenPartTwo) {
                                                                    return response.ok(res, 'Arrivé au bout', {
                                                                        tokenPartOne,
                                                                        tokenPartTwo,
                                                                        dataUser
                                                                    });
                                                                }
                                                            }
                                                        })
                                                    }
                                                })
                                        }
                                    })
                                } else if (oneMail === result.length - 1 && userFound === false) {
                                    /* Simulation 1.684s pour ne pas donner d'infos */
                                    setTimeout(() => {
                                        return response.badRequest(res, 'Email erroné : aucun compte correspondant');
                                    }, 1684);
                                }
                            }

                        }
                    }
                )
            }
        } catch (error) {
            return response.internalServer(res);
        }
    }
}

module.exports = UserControllers