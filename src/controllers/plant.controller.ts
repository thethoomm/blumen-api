import { Request, Response } from "express";
import { PlantService } from "../services/plant.service";
import { createPlantDto } from "../dtos/create-plant.dto";
import { z, ZodError } from "zod";

const plantService = new PlantService();

export class PlantController {
  async createPlant(req: Request, res: Response) {
    try {
      const data = createPlantDto.parse(req.body);

      await plantService.createPlant(data);
      res.status(201).json({
        message: "Planta criada com sucesso",
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Erro de validação",
          error: error.issues.map((issue) => ({
            path: issue.path[0],
            message: issue.message,
          })),
        });
      } else {
        res.status(500).json({
          message: "Erro interno do servidor",
          error: error,
        });
      }
    }
  }

  async getAllPlants(req: Request, res: Response) {
    try {
      const plants = await plantService.findAllPlants();

      res.status(200).json(plants);
    } catch (error) {
      res.status(500).json({
        message: "Erro ao buscar plantas",
        error: error,
      });
    }
  }

  async getPlant(req: Request, res: Response) {
    try {
      const idSchema = z.number().positive().int();
      const id = idSchema.parse(Number(req.params.id));

      const plant = await plantService.findPlantById(id);

      res.status(200).json(plant);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Erro de validação",
          error: error.issues.map((issue) => ({
            path: issue.path[0],
            message: issue.message,
          })),
        });
      } else {
        res.status(500).json({
          message: "Erro ao buscar planta",
          error: error,
        });
      }
    }
  }
}
