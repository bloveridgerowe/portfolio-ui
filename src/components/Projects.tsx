import { Project } from "@/data/projects";
import { ProjectsRow } from "@/components/ProjectsRow";

export interface ProjectsProps {
    projectsRows: Project[][];
};

export function Projects({ projectsRows }: ProjectsProps) {
    return (
        <section id="projects">
            <h2 className="text-1xl sm:text-2xl font-bold mb-6 text-center">Recent Projects</h2>
            <ProjectsRow projects={projectsRows[0]}/>
        </section>
    );
}

