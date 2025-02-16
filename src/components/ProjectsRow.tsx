import { ProjectCard } from "./ProjectCard";
import { Project } from "@/data/projects";

export interface ProjectsRowProps {
    projects: Project[]
}

export function ProjectsRow({ projects }: ProjectsRowProps) {
    if (projects.length !== 2) {
        throw new Error("Row supports only 2 projects.");
    }

    return (
        <div className="flex flex-col gap-8">
            <ProjectCard project={projects[0]}/>
            <ProjectCard project={projects[1]}/>
        </div>
    );
}