import { z } from "zod";

export const createPlantDto = z.object({
    title: z.string(),
    subtitle: z.string(),
    tags: z.string().array(),
    price: z.number().positive(),
    isSale: z.boolean(),
    discountPercent: z.number().positive(),
    characteristics: z.string(),
    description: z.string(),
    imageUrl: z.string(),
    plantTypeId: z.number()
})

export type CreatePlantDtoType = z.infer<typeof createPlantDto>