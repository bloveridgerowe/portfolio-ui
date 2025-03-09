import { Button } from "@/components/Button";

export interface TechStackProps {
    title: string;
    technologies?: string[];
}

export function TechStack({ technologies }: TechStackProps) {
    if (!technologies?.length) {
        return null;
    }

    return (
        <div className="flex flex-wrap gap-2 items-center justify-center">
            {technologies.map((tech) => (
                <Button className="bg-muted-less" key={tech}>
                    {tech}
                </Button>
            ))}
        </div>
    );
}
