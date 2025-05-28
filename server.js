// server.js
import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");

// Disable static file serving
const middlewares = jsonServer.defaults({
  static: false,
});

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
