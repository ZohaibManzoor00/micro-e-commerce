import { InferModel } from "drizzle-orm";
import { integer, pgTable, timestamp, varchar, text, serial, jsonb, date, } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull().references(() => usersTable.id, { onDelete: "cascade" }),

  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),

  status: varchar("status", { length: 50 }).notNull().default('In Progress'),
  nextMileStone: varchar("next_milestone", { length: 50 }).default('Beta Launch'),
  revenue: varchar("revenue", { length: 50 }),
  cost: varchar("cost", { length: 50 }),

  stack: text('stack').array(),
  domain: varchar('domain', { length: 255 }),
  github: varchar("github", { length: 255 }),
  
  image: varchar('image', { length: 255 }).default('/placeholder.svg'),

  startDate: date("start_date").defaultNow(),
  launchDate: date("launch_date"),

  // metrics: jsonb("metrics")
});

export type Project = InferModel<typeof projectsTable>;