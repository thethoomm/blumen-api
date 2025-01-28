import express from "express";
import { plantRoute } from "./routes/plants.route";

const app = express();
const port = 3000;

app.use(express.json())

app.use("/plants", plantRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta :${port}`);
});
