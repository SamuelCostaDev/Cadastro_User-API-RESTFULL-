const mongoose = require('mongoose');
mongoose.set('debug', true);

try {
    // Verificando se a variável de ambiente MONGODB_URI está definida
    if (!process.env.MONGODB_URI) {
      throw new Error('A variável de ambiente MONGODB_URI não está definida.');
    }
  
    // Conecta-se ao MongoDB
    mongoose.connect(process.env.MONGODB_URI)
      .then(() => {
        console.log('Conectado ao MongoDB');
      })
      .catch((err) => {
        console.error('Erro na conexão com o MongoDB:', err.message);
      });
  } catch (err) {
    console.error('Erro ao configurar a conexão com o MongoDB:', err.message);
  }

// Configura a Promise do mongoose
mongoose.Promise = global.Promise;

module.exports = mongoose;