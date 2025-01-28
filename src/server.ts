import express from "express";
import cors from "cors";
import { plantRoute } from "./routes/plants.route";
import { plantTypeRoute } from "./routes/plant-type.route";
import { env } from "../env";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use("/plants", plantRoute);
app.use("/plant-types", plantTypeRoute);

app.listen(env.PORT, () => {
  console.log(`Servidor rodando na porta :${env.PORT}`);
});
