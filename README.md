# PGSelecao

Foi utlizado no projeto ReactJS no front end e NodeJS com MongoDB no back.
OS endpoints da api no localhost porta 5000 são: /users para listar todos os usuários; /users/:id para exibir um usuário específico ambos com GET; /users POST para criar um usuários com json {"usuario": "xxx", "senha": "***"}  e /users/:id DELETE
As rotas estão protegidas, sendo necessário um usuário autenticado.Só a de criação que não para ser possível criar um usuário para testar.

Para rodar o sistema: Na pasta front-end use o comando npm install ou yarn install para baixar todas as dependências do react, axios etc...; Na pasta server use o comando npm install ou yarn para baixar todas as dependências do nodejs, mongoose, bcryptjs etc...

O banco foi MongoDB então no arquivo server/src/config/database.js substitua a string do banco do mongoDB.