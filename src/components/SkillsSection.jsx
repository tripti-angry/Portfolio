
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", level: 95, category: "frontend" },
    { name: "CSS3", level: 90, category: "frontend" },
      { name: "JavaScript", level: 95, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Vue.js", level: 75, category: "frontend" },
  { name: "Sass/SCSS", level: 85, category: "frontend" },
  { name: "Bootstrap", level: 75, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 65, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 80, category: "backend" },
  { name: "GraphQL", level: 60, category: "backend" },
  { name: "REST APIs", level: 60, category: "backend" },

  // Programming Languages
   { name: "C++", level: 95, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "Java", level: 75, category: "languages" },
  { name: "PHP", level: 65, category: "languages" },

  // Tech/Frameworks
  { name: "Next.js", level: 80, category: "frameworks" },
  { name: "React Native", level: 75, category: "frameworks" },
  { name: "Django", level: 70, category: "frameworks" },
  { name: "Laravel", level: 65, category: "frameworks" },
  { name: "Spring Boot", level: 60, category: "frameworks" },
  { name: "Docker", level: 75, category: "frameworks" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Canva", level: 90, category: "tools" },
  { name: "Figma", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
   { name: "MATLAB", level: 80, category: "tools" },
    { name: "LTSpice", level: 80, category: "tools" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Tech/Frameworks" },
  { id: "tools", label: "Tools" }
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:scale-102"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="bg-card p-6 rounded-lg shadow-sm border border-border/50 hover:shadow-md hover:border-border transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg text-card-foreground">
                  {skill.name}
                </h3>
                <span className="text-xs text-muted-foreground capitalize">
                  {skill.category === "languages" ? "Programming Language" : 
                   skill.category === "frameworks" ? "Tech/Framework" : 
                   skill.category}
                </span>
              </div>
              
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden mb-2">
                <div
                  className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: skill.level + "%",
                    animation: `grow 1.5s ease-out forwards`
                  }}
                />
              </div>

              <div className="text-right">
                <span className="text-sm font-medium text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes grow {
          from {
            width: 0%;
          }
          to {
            width: var(--skill-level);
          }
        }
      `}</style>
    </section>
  );
};