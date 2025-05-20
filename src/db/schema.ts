import { integer, pgTable, timestamp, varchar, text, serial, jsonb } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const projectsTable = pgTable("projects", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
  .notNull()
  .references(() => usersTable.id, { onDelete: "cascade" }),

  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),

  status: varchar("status", { length: 50 }).notNull().default('In Progress'),
  nextMileStone: varchar("next_milestone", { length: 50 }).default('Beta Launch'),
  revenue: varchar("revenue", { length: 50 }),

  stack: text('stack').array(),
  domain: varchar('domain', { length: 255 }),
  github: varchar("github", { length: 255 }),
  
  image: varchar('image', { length: 255 }).default('/placeholder.svg?height=600&width=1200'),

  startDate: timestamp("start_date").defaultNow(),
  launchDate: timestamp("launch_date"),

  metrics: jsonb("metrics")
});

