import { Request, Response } from "express";
import { PlantTypeService } from "../services/plant-type.service";

const plantTypeService = new PlantTypeService();

export class PlantTypeController {
  async getAllTypes(req: Request, res: Response) {
    try {
      const types = await plantTypeService.findAllPlantTypes();

      res.status(200).json(types);
    } catch (error) {
      res.status(500).json({
        message: "Erro interno do servidor",
        error: error,
      });
    }
  }
}
