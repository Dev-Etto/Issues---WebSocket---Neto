# Projeto WebSocket

Este projeto foi desenvolvido com o objetivo de estudar e apresentar uma aula sobre o uso de WebSocket para comunicação em tempo real. Ele demonstra como criar um chat funcional com múltiplos usuários utilizando tecnologias modernas.

## Tecnologias Utilizadas e Suas Finalidades

- [Node.js](https://nodejs.org/): Utilizado como ambiente de execução para o servidor WebSocket, permitindo a comunicação em tempo real entre os clientes.
- [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket): Protocolo utilizado para estabelecer a comunicação bidirecional em tempo real entre o servidor e os clientes.
- [ngrok](https://ngrok.com/): Ferramenta usada para expor o servidor local para a internet, facilitando o acesso remoto ao projeto durante a aula.
- [http-server](https://www.npmjs.com/package/http-server): Servidor HTTP simples utilizado para servir os arquivos estáticos da interface web.
- [nvm](https://github.com/nvm-sh/nvm): Gerenciador de versões do Node.js, recomendado para garantir que o projeto seja executado com a versão correta do Node.js.

## Funcionalidades
- Conexão de múltiplos usuários.
- Envio e recebimento de mensagens em tempo real.
- Opção de entrar com um nome de usuário ou como anônimo.
- Interface web amigável.

## Pré-requisitos
- Node.js (versão 16 ou superior).
- npm (gerenciador de pacotes do Node.js).
- ngrok (para expor o servidor local para a internet).
- nvm (opcional, mas recomendado para gerenciar a versão do Node.js).

## Instalação e Execução
1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. (Opcional) Use o nvm para garantir a versão correta do Node.js:
   ```sh
   nvm install 16
   nvm use 16
   ```

3. Crie o arquivo `ngrok.yaml` e preencha-o com seu token do ngrok:
   ```yaml
   version: "2"
   authtoken: SEU_TOKEN_DO_NGROK
   tunnels:
     websocket:
       addr: 8080
       proto: http
     httpserver:
       addr: 8081
       proto: http
   ```

4. Instale as dependências:
   ```sh
   npm install
   ```

5. Exponha as portas no ngrok:
   ```sh
   npm run ngrok
   ```

6. Atualize o link do WebSocket no arquivo `index.html` com o link gerado pelo ngrok para a porta 8080:
   ```html
   socket = new WebSocket("https://SEU_LINK_NGROK_PORTA_8080");
   ```

7. Inicie o servidor e o front-end:
   ```sh
   npm run dev
   ```

7. Acesse a aplicação pelo link gerado pelo ngrok para a porta 8081.

## Licença
Este projeto está licenciado sob a [Licença MIT](./LICENSE).

---

Autor: Dev-Etto
