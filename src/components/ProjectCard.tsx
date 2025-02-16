import { useCheckOnlineStatus } from "@/hooks/check-online-status";
import { StatusLabel } from "./StatusLabel";
import { TechStack } from "@/components/TechStack";
import { ProjectLinks } from "@/components/ProjectLinks";
import { Project } from "@/data/projects";

export interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { data: isLive, isLoading } = useCheckOnlineStatus(project.healthChecks ?? []);

    const Icon = project.icon;

    return (
        <div className="flex flex-col gap-4 border border-border rounded-3xl bg-muted relative pt-8 pb-6 px-5 sm:py-8 sm:px-7 h-full">
            <StatusLabel isLive={isLive} isLoading={isLoading}/>
            <div className="flex gap-2 items-center justify-center">
                <Icon/>
                <h3 className="text-xl font-bold">{project.name}</h3>
            </div>
            <div className="text-center md:text-justify flex-grow space-y-4">
                {project.description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <TechStack title="Frontend" technologies={project.frontend?.technologies}/>
            <TechStack title="Backend" technologies={project.backend?.technologies}/>
            <ProjectLinks frontendRepositoryLink={project.frontend?.repositoryLink} backendRepositoryLink={project.backend?.repositoryLink} siteLink={project.link} isLive={isLive}/>
        </div>
    );
}
