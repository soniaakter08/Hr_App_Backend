import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./public",
});

server.use(
  cors({
    origin: "*",
  })
);
server.use(middlewares);

server.get("/status", (req, res) => {
  res.json({ message: "Backend is now live!!" });
});

server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server running at http://localhost:${PORT}`);
});
