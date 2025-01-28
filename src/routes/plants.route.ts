import { Router } from "express";
import { PlantController } from "../controllers/plant.controller";

export const plantRoute = Router();

const plantController = new PlantController();

plantRoute.post("/", plantController.createPlant);
plantRoute.get("/", plantController.getAllPlants);
plantRoute.get("/:id", plantController.getPlant);
