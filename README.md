# DESAFIO 02 - ESCRIBO

## URLS:
  - Hospedagem: https://desafio02-escribo-53b905bd6eab.herokuapp.com/
  - GitHub: https://github.com/SamuelCostaDev/desafio02-escribo

### INSTRUÇÕES:
  * Abra o link da [Hospedagem](https://desafio02-escribo-53b905bd6eab.herokuapp.com/)
  * Você terá dois botões, onde um levará para o [Cadastro](https://desafio02-escribo-53b905bd6eab.herokuapp.com/resgisterUser) e o outro mostrará todos os [Usuários](https://desafio02-escribo-53b905bd6eab.herokuapp.com/users)

### ROTAS:
  - Rotas API: 

      - Ver todos os usuários: /api/v1/auth/usersAll
      - Ver um unico usuário: /api/v1/auth/users/:userId
      - Registrar um usuário: /api/v1/auth/register
      - Logar: /api/v1/auth/authenticate
      - Editar um usuário: /api/v1/auth/users/update/:userId
      - Remover um usuário: /api/v1/auth/users/:userId
  - Rotas de Vizualização: 
      - Página Inicial: /
      - Página de Cadastro: /resgisterUser
      - Página para ver todos os usuários: /users
