import { Skill } from "@/data/skills";

export interface SkillsCarouselProps {
    skillsItems: Skill[];
}

export function SkillsCarousel({ skillsItems }: SkillsCarouselProps) {
    return (
        <section id="skills">
            <h2 className="text-1xl sm:text-2xl font-bold mb-3 text-center">Skills + Tools</h2>
            <div className="-mx-4 sm:-mx-6 md:-mx-7 xl:mx-0 overflow-hidden py-3">
                <div className="flex w-max animate-scroll gap-7">
                    {Array(4).fill(skillsItems).flat().map((skill, index) => (
                        <div key={index}>
                            <div className="hover-scale-large gap-3 rounded-full bg-muted py-3 px-6 flex items-center justify-center">
                                <img src={skill.logo} alt={`Skill ${index}`} className="w-10 h-10 object-contain"/>
                                <p className="font-semi-minus select-none">{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
