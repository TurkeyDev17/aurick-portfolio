import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export default function Skills() {
    const categories = Array.from(new Set(skills.map((s) => s.category)));

    return (
        <section id="skills" className="py-20 px-6 bg-black text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-center mb-12">
                    <span className="text-red-500">Skills</span>
                </h2>

                {categories.map((category) => (
                    <div key={category} className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 text-center">{category}</h3>
                        <div className="flex flex-wrap justify-center gap-6">
                            {skills
                                .filter((s) => s.category === category)
                                .map((skill, index) => (
                                    <SkillCard key={skill.name} skill={{ ...skill, index }} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
