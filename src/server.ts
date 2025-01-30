import express from "express";
import cors from "cors";
import { plantRoute } from "./routes/plants.route";
import { plantTypeRoute } from "./routes/plant-type.route";
import { env } from "../env";

const app = express();
const PORT = env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://thom-blumen.s3-website.us-east-2.amazonaws.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.get("/", (req, res) => {
  res.send("Blumen API Online");
});
app.use("/plants", plantRoute);
app.use("/plant-types", plantTypeRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta :${PORT}`);
});
