const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
    // Verifancando se exite cabeçalho de autorização
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).send({ message: 'Token não informado'});

    const parts = authHeader.split(' ');

    if (!parts.lenght === 2)
        return res.status(401).send({ message: 'Token Error'});

    const [ scheme, token ] = parts;

    // Verifica se o esquema é "Bearer"
    if (!/^Bearer$/i.test(scheme)) 
        return res.status(401).send({ message: 'Token mal informado'});

    // Verifica a validade do token utilizando a chave secreta (auth.json)
    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err) return res.status(401).send({ message: 'Token Inválido'});

        req.userId = decoded.id;
        return next();
    });
};