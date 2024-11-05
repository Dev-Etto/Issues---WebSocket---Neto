# Projeto WebSocket

Este projeto é composto por um servidor WebSocket e uma interface web para os usuários interagirem.

## Funcionalidades
- Conexão de múltiplos usuários.
- Envio e recebimento de mensagens em tempo real.
- Opção de entrar com um nome de usuário ou como anônimo.
- Interface web amigável.

## Pré-requisitos
- Node.js (versão 16)
- npm (gerenciador de pacotes do Node.js)
- ngrok (para expor o servidor local para a internet)

## Instalação
1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. Crie o arquivo `ngrok.yaml` e preencha-o com seu token do ngrok:
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

3. Use a versão correta do Node.js:
   ```sh
   nvm use
   ```

4. Instale as dependências:
   ```sh
   npm install
   ```

5. Exponha as portas no ngrok:
   ```sh
   npm run ngrok
   ```

6. Pegue o link da porta 8080 e adicione como link da porta na instância da classe WebSocket no arquivo `index.html`:
   ```html
   socket = new WebSocket("https://SEU_LINK_NGROK_PORTA_8080");
   ```

7. Use o outro link para que os usuários possam acessar a aplicação.

8. Rode o servidor com o front-end:
   ```sh
   npm run dev
   ```

Agora, a aplicação estará acessível através do link exposto pelo ngrok na porta 8081.
