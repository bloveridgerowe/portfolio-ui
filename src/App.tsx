import { SkillsCarousel } from "@/components/SkillsCarousel";
import { Projects } from "@/components/Projects";
import { AboutMe } from "@/components/AboutMe";
import { TopBar } from "@/components/TopBar";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export function App() {
    return (
        <div className="min-h-dvh">
            <main className="container flex flex-col gap-6 max-w-7xl mx-auto py-3 px-4 sm:py-4 sm:px-6 md:py-5 md:px-7">
                <TopBar/>
                <SkillsCarousel skillsItems={skills}/>
                <AboutMe/>
                <Projects projects={projects}/>
            </main>
        </div>
    );
}
