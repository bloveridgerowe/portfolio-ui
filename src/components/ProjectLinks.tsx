import { GitMerge, Globe } from "lucide-react";
import { Button } from "@/components/Button";
import { Fragment } from "react";

export interface ProjectLinksProps {
    frontendRepositoryLink?: string;
    backendRepositoryLink?: string;
    siteLink?: string;
    isLive?: boolean;
}

export function ProjectLinks({ frontendRepositoryLink, backendRepositoryLink, siteLink, isLive }: ProjectLinksProps) {
    return (
        <div className="p-2 flex flex-wrap gap-4 items-center justify-center">
            {frontendRepositoryLink && (
                <Button className="bg-[#a756ffe6]">
                    <a href={frontendRepositoryLink} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                        <GitMerge /> Frontend Git Repository
                    </a>
                </Button>
            )}
            {backendRepositoryLink && (
                <Button className="bg-[#a756ffe6]">
                    <a href={backendRepositoryLink} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                        <GitMerge /> Backend Git Repository
                    </a>
                </Button>
            )}
            {siteLink && (
                <Button
                    className={`bg-[#5690ffe6] ${!isLive ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}`}>
                    {isLive ? (
                        <a href={siteLink} className="flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                            <Globe /> Launch Website
                        </a>
                    ) : (
                        <Fragment>
                            <Globe /> Launch Website
                        </Fragment>
                    )}
                </Button>
            )}
        </div>
    );
}
