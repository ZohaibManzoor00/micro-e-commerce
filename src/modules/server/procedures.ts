import { db } from "@/db/db";
import { projectsTable } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const userRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    return [{ hello: "world" }];
  }),
});

export const projectRouter = createTRPCRouter({
  getAll: baseProcedure.query(async () => {
    const projects = await db.select().from(projectsTable);
    return projects;
  }),
});
