import { useCheckOnlineStatus } from "@/hooks/check-online-status";
import { OnlineStatus } from "./OnlineStatus.tsx";
import { TechStack } from "@/components/TechStack";
import { ProjectLinks } from "@/components/ProjectLinks";
import { Project } from "@/data/projects";
import { WorkInProgress } from "./WorkInProgress.tsx";

export interface ProjectCardProps {
    project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { data: isLive, isLoading } = useCheckOnlineStatus(project.healthChecks ?? []);

    const Icon = project.icon;

    return (
        <div className="flex flex-col gap-4 border border-border rounded-3xl bg-muted relative pt-10 md:pt-8 pb-6 px-5 sm:py-8 sm:px-7 h-full">
            {project.workInProgress && <WorkInProgress/>}
            <OnlineStatus isLive={isLive} isLoading={isLoading}/>
            <div className="flex gap-2 items-center justify-center">
                <Icon/>
                <h3 className="text-xl font-bold">{project.name}</h3>
            </div>
            <div className="text-center md:text-justify flex-grow space-y-4">
                {project.description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="flex flex-col gap-4 py-2">
                <TechStack title="Frontend" technologies={project.frontend?.technologies}/>
                <TechStack title="Backend" technologies={project.backend?.technologies}/>
            </div>
            <ProjectLinks frontendRepositoryLink={project.frontend?.repositoryLink} backendRepositoryLink={project.backend?.repositoryLink} siteLink={project.link} isLive={isLive}/>
        </div>
    );
}
