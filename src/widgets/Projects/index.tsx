import { useEffect, useState } from "react";
import { ProjectCard } from "@/entities";
import { loadMdEntries } from "@/shared/lib/dataLoader";
import { Container, DecryptedText, TypographyH2 } from "@/shared/ui";
import { motion } from "motion/react";

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<[any] | []>([]);

  useEffect(() => {
    loadMdEntries("https://raw.githubusercontent.com/cm3tahkuh/portfolio/refs/heads/gh-pages/data/projects.md").then(setProjects);
  }, []);

  return (
    <Container id="projects" className="scroll-mt-[100px]">
      <DecryptedText
        text={<TypographyH2>Мои проекты</TypographyH2>}
        animateOn="view"
        revealDirection="start"
        speed={100}
        maxIterations={1}
        sequential
      />

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="grid gap-6 md:grid-cols-2 mt-6"
      >
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </motion.section>
    </Container>
  );
};
