const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Configure o proxy para a URL da API de destino
  app.use(
    "/api", // O caminho para onde você deseja direcionar as solicitações
    createProxyMiddleware({
      target: "https://mercado.varejofacil.com", // URL da API de destino
      changeOrigin: true,
    })
  );
};
