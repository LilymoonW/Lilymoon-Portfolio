"use client";

import { cn } from "@/src/utils/utils";
import { ProjectCardGrid } from "../features/projects/ProjectCardGrid";

export const ProjectGrid = ({
  items,
  className,
}: {
  items: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    status: string;
    featured: boolean;
    link: string;
  }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden",
        className
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-center">
            <ProjectCardGrid project={item} />
          </div>
        ))}
      </div>
    </div>
  );
}; 