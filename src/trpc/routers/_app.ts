import {createTRPCRouter } from "../init";
import { projectRouter, userRouter } from "@/modules/server/procedures";

export const appRouter = createTRPCRouter({
  users: userRouter,
  projects: projectRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
