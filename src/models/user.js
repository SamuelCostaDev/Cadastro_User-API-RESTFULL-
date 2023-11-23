const mongoose = require('../database');
const bcrypt = require('bcryptjs');

// Definição do esquema do usuário
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    tel: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function (next) {
    // Gera um hash antes de salvar no banco
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

// Criação do modelo User baseado no esquema UserSchema
const User = mongoose.model('User', UserSchema);

module.exports = User;