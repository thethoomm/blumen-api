import { db } from "../db";
import { PlantType, plantTypesTable } from "../db/schema";

interface IPlantTypeService {
  findAllPlantTypes(): Promise<PlantType[]>;
}

export class PlantTypeService implements IPlantTypeService {
  async findAllPlantTypes(): Promise<PlantType[]> {
    try {
      const plantTypes = await db.select().from(plantTypesTable);

      return plantTypes;
    } catch (error) {
      throw error;
    }
  }
}
