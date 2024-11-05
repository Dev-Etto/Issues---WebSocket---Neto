const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
	console.log("Novo usuário conectado.");

	ws.on("message", (message) => {
		const messageStr = message.toString();
		console.log("Mensagem recebida:", messageStr);

		for (const client of wss.clients) {
			if (client.readyState === WebSocket.OPEN) {
				client.send(messageStr);
			}
		}
	});

	ws.on("close", () => {
		console.log("Usuário desconectado.");
	});
});

console.log("Servidor WebSocket rodando na porta 8080");
