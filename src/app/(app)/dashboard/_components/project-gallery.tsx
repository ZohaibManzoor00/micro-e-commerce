"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { ProjectCard } from "./project-card";

export default function ProjectGallery() {
  const trpc = useTRPC();
  const {
    data: projects,
    isSuccess,
    isLoading,
    isError,
    error,
  } = useQuery(trpc.projects.getAllProjects.queryOptions());

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-80 bg-background opacity-80 animate-pulse rounded"
          />
        ))}
      </div>
    );
  }

  if (isError) return <div className="text-red-600">Error: {error.message}</div>;

  if (isSuccess && projects.length === 0) return <div>No projects found.</div>;

  if (!isSuccess) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}/>
      ))}
    </div>
  );
}
