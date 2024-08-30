# Backend - Projeto de Gerenciamento de Clientes

Este é o backend da aplicação de gerenciamento de clientes, desenvolvido com Node.js e TypeScript, utilizando MongoDB para o armazenamento dos dados.

## Funcionalidades

- **GET /clients** - Listar todos os clientes
- **POST /clients** - Cadastrar um novo cliente
- **DELETE /clients/:id** - Deletar um cliente

## Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **MongoDB**

## Como Executar o Backend

1. Navegue para o diretório do backend:
    ```bash
    cd backend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    npm run dev
    ```
4. Execute o prisma io:
    ```bash
    npx prisma studio 
    ```

## Configuração do Ambiente

1. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias. Exemplo:

    ```env
    DATABASE_URL="your-database-url"
    ```

2. Certifique-se de que o banco de dados está configurado corretamente e que a API está rodando.
