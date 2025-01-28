CREATE TABLE "plant_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "plants" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(100) NOT NULL,
	"subtitle" varchar(200) NOT NULL,
	"tags" text NOT NULL,
	"price" real NOT NULL,
	"is_sale" boolean DEFAULT false NOT NULL,
	"discount_percent" real NOT NULL,
	"characteristics" text NOT NULL,
	"description" text NOT NULL,
	"image_url" varchar NOT NULL,
	"plant_type_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "plants" ADD CONSTRAINT "plants_plant_type_id_plant_types_id_fk" FOREIGN KEY ("plant_type_id") REFERENCES "public"."plant_types"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "plant_type_id_index" ON "plants" USING btree ("plant_type_id");