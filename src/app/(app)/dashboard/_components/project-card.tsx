import { Project } from "@/db/schema";

import { Badge, BadgeColor } from "@/components/badge";
import { Heading } from "@/components/heading";
import { badgeStatusColorMapper } from "@/constants/misc";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectStatusBadgeColor = (badgeStatusColorMapper[project.status] || "lime") as BadgeColor;

  return (
    <div className="p-4 border rounded">
      <Heading>{project.title}</Heading>
      <Badge color={projectStatusBadgeColor}>{project.status}</Badge>
    </div>  
  );
}
