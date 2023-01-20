/* Modèles d'envoi de réponses selon le statut de la réponse */

exports.ok = async (res, message, data) => {
    return res.status(200).json({ status: true, message: message, data: data });
}

exports.dbok = async (res, message) => {
    return res.status(200).json({ status: true, message: message });
}

exports.wrong = async (res, message) => {
    return res.status(400).json({ status: true, message: message });
}

exports.badRequest = async (res, message) => {
    return res.status(400).json({ status: false, message: message });
}

exports.internalServer = async (res, message) => {
    return res.status(500).json({ status: false, reject: true, message: message });
}