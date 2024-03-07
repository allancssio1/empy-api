<h1 align="center">
  <img src="./public/logo.svg" />
  <p>Empy Bank</p>
</h1>

## Sobre
  Uma aplicação para gerenciar a carteira de clientes
da Empy Bank, permitindo o cadastro de clientes e assistentes comerciais, e a
associação entre eles.

## Tecnologias
- NodeJs >=20
- Typescript
- Cors
- Vitest
- Prisma
- Docker compose
- faker-js
- swagger-ui-express
- tsup
- zod

## Comandos

### Clone repositório
- git clone git@github.com:allancssio1/empy-api.git

### Entre na pasta
- cd empy-api

### Instale as dependencias
 - npm install

### Gerar bando de dados
- docker compose up -d
- npx prisma migrate dev

### Rode a aplicação
 - npm run dev

 ### Acesse em seu navegador
 - http://localhost:3333/