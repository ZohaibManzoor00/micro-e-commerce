// seed.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { seed } from "drizzle-seed";
import * as schema from "./schema";
import { Client } from "pg";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DATABASE_URL!,
//   ssl: { rejectUnauthorized: false },
});

const db = drizzle(client);
await client.connect();

async function main() {
  console.log("Seeding...");
  await seed(db, schema).refine((f) => ({
    usersTable: {
      count: 3,
      columns: {
        name: f.fullName(),
        age: f.int({ minValue: 18, maxValue: 65 }),
        email: f.email(),
      },
      with: {
        projectsTable: 2, // 2 projects per user
      },
    },
    projectsTable: {
      count: 6, // total projects to match users * projects per user
      columns: {
        title: f.valuesFromArray({
          values: [
            "TinyURL Clone",
            "Todo App",
            "AI Blog",
            "Dev Dashboard",
            "E-commerce MVP",
            "Chat App",
          ],
        }),
        description: f.valuesFromArray({
          values: [
            "A URL shortening service with custom domains, analytics, and API access.",
            "A todo app with real-time collaboration features.",
            "A blog platform powered by AI-generated content.",
            "A developer dashboard with analytics and monitoring.",
            "An e-commerce MVP with payment integration.",
          ],
        }),
        status: f.valuesFromArray({
          values: ["In Progress", "Completed", "On Hold"],
        }),
        nextMileStone: f.valuesFromArray({
          values: ["Alpha", "Beta Launch", "Launch", "Maintenance"],
        }),
        revenue: f.valuesFromArray({
          values: ["$0", "$120/mo", "$500/mo", "$1k/mo"],
        }),
        stack: f.valuesFromArray({
          values: [
            JSON.stringify(["Next.js", "Tailwind CSS", "Supabase"]),
            JSON.stringify(["React", "Node.js", "PostgreSQL"]),
            JSON.stringify(["Vue", "Firebase"]),
            JSON.stringify(["Angular", "MongoDB"]),
          ],
        }),
        domain: f.valuesFromArray({
          values: [
            "tinylink.io",
            "myapp.com",
            "example.org",
            "coolproject.dev",
          ],
        }),
        github: f.valuesFromArray({
          values: [
            "github.com/username/tinyurl-clone",
            "github.com/username/todo-app",
            "github.com/username/ai-blog",
          ],
        }),
        image: f.valuesFromArray({
          values: ["/placeholder.svg?height=600&width=1200"],
        }),
        // For timestamps, drizzle-seed uses JS Date by default, or you can pass constants
        startDate: f.date({
          minDate: new Date(2023, 0, 1),
          maxDate: new Date(),
        }),
        launchDate: f.date({
          minDate: new Date(2024, 0, 1),
          maxDate: new Date(2025, 11, 31),
        }),
        metrics: f.valuesFromArray({
          values: [
            JSON.stringify({
              users: 48,
              links: 256,
              clicks: 1240,
              conversionRate: "3.2%",
            }),
          ],
        }),
      },
    },
  }));
  console.log("🌱 Seed complete.");
  await client.end();
}

main().catch((err) => {
  console.error("❌ Seed failed", err);
  process.exit(1);
});
