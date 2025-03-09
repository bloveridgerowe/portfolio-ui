import { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard.tsx";

export interface ProjectsProps {
    projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="flex flex-col gap-4">
            <h2 className="text-1xl sm:text-2xl font-bold text-center">Recent Projects</h2>
            {projects.map(project => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </section>
    );
}

