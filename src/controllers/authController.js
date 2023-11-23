const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const authConfig = require('../config/auth');

const User = require('../models/user');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

const authMiddleware = require('../middlewares/auth')

// Rota para ver todos os usuários
router.get('/usersAll', authMiddleware ,async (req , res) => {
    try {
        const users = await User.find();

        return res.send({ users });
    } catch (err) {
        return res.status(400).send({ message: 'Falha ao carregar usuários' });
        
    }
});

// Rota para ver um único usuário
router.get('/users/:userId', async (req , res) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ message: 'Falha ao carregar usuário' });
        
    }
});

// Rota para registar um usuário
router.post('/register', async (req, res) => {
    const { email } = req.body;

    try {
        if (await User.findOne({ email }))
            return res.status(400).send({ message: 'E-mail já existente' });
        
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ 
            user,
            token: generateToken({  id: user.id })
         });
    } catch (err) {
        return res.status(400).send({ message: 'Falha no Registro' });
    }
});

// Rota para usuário logar
router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) 
        return res.status(400).send({ message: 'Usuário e/ou senha inválidos' });

    if (!await bcrypt.compare(password, user.password))
        return res.status(401).send({ message: 'Usuário e/ou senha inválidos' });
        
    user.password = undefined;

    
        
    res.send({ 
        user,
        token: generateToken({  id: user.id }) });
});


router.put('/users/update/:userId', async (req, res) => {
    try {

        const userId = req.params.userId;
        const { name, email, password, tel } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userUpdate = await User.findByIdAndUpdate(userId, { name, email, password: hashedPassword, tel }, { new: true });

        return res.status(200).send({ userUpdate });    
    } catch (err) {
        console.error(err);
        return res.status(400).send({ message: 'Falha no Registro' });
    }
});

router.delete('/users/:userId', async (req , res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);

        return res.status(200).send({ message: 'Removido com sucesso' });
    } catch (err) {
        return res.status(400).send({ message: 'Falha ao remover usuário' });
        
    }
});

router.get('/', (req, res) => {
    // Use o caminho absoluto do arquivo index.html
    const indexPath = path.join(__dirname, '../public/register/index.html');
    res.sendFile(indexPath);
});

router.get('/login', (req, res) => {
    // Use o caminho absoluto do arquivo index.html
    const indexPath = path.join(__dirname, '../public/login/index.html');
    res.sendFile(indexPath);
});
module.exports = app => {
    // Adiciona a rota para o index.html antes das outras rotas
    app.use('/', router);
    app.use('/api/v1/auth', router);
};