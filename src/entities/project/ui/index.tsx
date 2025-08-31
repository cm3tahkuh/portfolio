import { Card, CardContent } from "@/shared/ui/Card/card";
import { TypographyH3, TypographyP } from "@/shared/ui";
import { ArrowRight } from "lucide-react";
import type { Project } from "../model/project";

export const ProjectCard: React.FC<Project> = ({
  name,
  image,
  github,
  demo,
  description,
}) => (
  <Card className="overflow-hidden rounded-2xl py-0 border-2 shadow-lg hover:shadow-xl transition-shadow">
    <img src={image} alt={name} className="w-full h-[205px] object-cover" />
    <CardContent className="p-4 py-2">
      <TypographyH3 className="text-lg font-semibold mb-2">{name}</TypographyH3>
      <TypographyP className="mb-6">{description}</TypographyP>
      <div className="flex items-center mb-2 justify-between text-sm font-medium">
        {github && (
          <a href={github} target="_blank" className="hover:underline">
            GitHub
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            className="flex items-center gap-1 hover:underline"
          >
            Демо <ArrowRight size={14} />
          </a>
        )}
      </div>
    </CardContent>
  </Card>
);
