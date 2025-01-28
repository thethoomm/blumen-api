import { relations } from "drizzle-orm";
import {
  serial,
  pgTable,
  varchar,
  timestamp,
  text,
  boolean,
  real,
  integer,
  index,
} from "drizzle-orm/pg-core";

export const plantTypesTable = pgTable("plant_types", {
  id: serial("id").primaryKey(),
  name: varchar("name", {
    length: 100,
  }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const plantTypesRelations = relations(plantTypesTable, ({ many }) => ({
  plants: many(plantsTable),
}));

export type PlantType = typeof plantTypesTable.$inferSelect;
export type PlantTypeInsert = typeof plantTypesTable.$inferInsert;

export const plantsTable = pgTable(
  "plants",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", {
      length: 100,
    }).notNull(),
    subtitle: varchar("subtitle", {
      length: 200,
    }).notNull(),
    tags: text("tags").notNull(),
    price: real("price").notNull(),
    isSale: boolean("is_sale").default(false).notNull(),
    discountPercent: real("discount_percent").notNull(),
    characteristics: text("characteristics").notNull(),
    description: text("description").notNull(),
    imageUrl: varchar("image_url").notNull(),
    plantTypeId: integer("plant_type_id").references(() => plantTypesTable.id, {
      onDelete: "cascade",
    }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [index("plant_type_id_index").on(table.plantTypeId)]
);

export const plantsRelations = relations(plantsTable, ({ one }) => ({
  plantType: one(plantTypesTable, {
    fields: [plantsTable.plantTypeId],
    references: [plantTypesTable.id],
  }),
}));

export type Plant = typeof plantsTable.$inferSelect;
export type PlantInsert = typeof plantsTable.$inferInsert;
