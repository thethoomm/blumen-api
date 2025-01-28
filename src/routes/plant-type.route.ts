import { Router } from "express";
import { PlantTypeController } from "../controllers/plant-type.controller";

export const plantTypeRoute = Router();

const plantTypeController = new PlantTypeController();

plantTypeRoute.get("/", plantTypeController.getAllTypes);
