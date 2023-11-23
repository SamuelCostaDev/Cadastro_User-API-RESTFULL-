const mongoose = require('mongoose');

try {
    if (!process.env.MONGODB_URI) {
      throw new Error('A variável de ambiente MONGODB_URI não está definida.');
    }
  
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
  
mongoose.Promise = global.Promise;

module.exports = mongoose;