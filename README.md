# DESAFIO 02 - ESCRIBO

## URLS:
- **Hospedagem:** [https://desafio02-escribo-53b905bd6eab.herokuapp.com/](https://desafio02-escribo-53b905bd6eab.herokuapp.com/)
- **GitHub:** [https://github.com/SamuelCostaDev/desafio02-escribo](https://github.com/SamuelCostaDev/desafio02-escribo)

## INSTRUÇÕES:
1. Abra o link da Hospedagem.
2. Você terá dois botões, onde um levará para o Cadastro e o outro mostrará todos os Usuários.

## ROTAS:

### Rotas API:

- **Ver todos os usuários:** `/api/v1/auth/usersAll` - Método GET
- **Ver um único usuário:** `/api/v1/auth/users/<userId>` - Método GET
- **Registrar um usuário:** `/api/v1/auth/register` - Método POST
- **Logar:** `/api/v1/auth/authenticate` - Método POST
  - Para logar, é preciso passar no body o JSON: `{"name": "Meu Nome", "email": "meu@email.com", "password": "minhasenha", "tel": 0123456789}`
- **Editar um usuário:** `/api/v1/auth/users/update/<userId>`
- **Remover um usuário:** `/api/v1/auth/users/<userId>`

### Rotas de Vizualização:

- **Página Inicial:** `/`
- **Página de Cadastro:** `/resgisterUser`
- **Página para ver todos os usuários:** `/users`

## OBS.:
- **Tecnologias utilizadas:**
  - NodeJS
  - MongoDB
  - Framework API: Express
  - Framework Vizualização: EJS
  - Token JWT
  - Body-Parser
  - Cors

- O banco de dados está hospedado no GCP, e o deploy da aplicação foi realizado no Heroku.
- O source tem segurança de acesso com token para listagem de usuários para garantir que seja acessado somente com login.
- O código foi comentado por questões didáticas.
