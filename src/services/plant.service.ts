import { eq } from "drizzle-orm";
import { db } from "../db";
import { Plant, PlantInsert, plantsTable } from "../db/schema";
import { CreatePlantDtoType } from "../dtos/create-plant.dto";

interface IPlantService {
  createPlant(data: CreatePlantDtoType): Promise<void>;
  findAllPlants(): Promise<Plant[]>;
  findPlantById(id: number): Promise<Plant>;
}

export class PlantService implements IPlantService {
  async createPlant(data: CreatePlantDtoType): Promise<void> {
    try {
      const plant: PlantInsert = {
        title: data.title,
        subtitle: data.subtitle,
        characteristics: data.characteristics,
        description: data.description,
        discountPercent: data.discountPercent,
        imageUrl: data.imageUrl,
        price: data.price,
        tags: data.tags.join(","),
        isSale: data.isSale,
        plantTypeId: data.plantTypeId,
      };

      await db.insert(plantsTable).values(plant);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async findAllPlants(): Promise<Plant[]> {
    try {
      const plants = await db
        .select()
        .from(plantsTable)
        .orderBy(plantsTable.createdAt);

      return plants;
    } catch (error) {
      throw error;
    }
  }

  async findPlantById(id: number): Promise<Plant> {
    try {
      const result = await db
        .select()
        .from(plantsTable)
        .where(eq(plantsTable.id, id))
        .limit(1);

      const plant = result[0];

      if (!plant) {
        throw new Error("Planta não existe");
      }

      return plant;
    } catch (error) {
      console.log("Aqui: ", error);
      throw error;
    }
  }
}
