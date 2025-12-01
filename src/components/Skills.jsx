import { useState } from "react";
import { cn } from "../lib/utils";
  const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "TailwindCSS", level: 85, category: "frontend" },
  { name: "Material-UI (MUI)", level: 80, category: "frontend" },
  { name: "Laravel", level: 85, category: "backend" },
  { name: "PHP", level: 80, category: "backend" },
  { name: "Java", level: 80, category: "backend" },
  { name: "Spring Boot", level: 75, category: "backend" },
  { name: "JEE", level: 70, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 80, category: "tools" },
  { name: "Leaflet.js", level: 70, category: "frontend" },
  { name: "MySQL / Databases", level: 80, category: "backend" },
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },
  { name: "Eclipse", level: 80, category: "tools" },
];

const catageories =["all","frontend","backend","tools"]
export const Skills=()=>{
const [activeCategory,setActiveCategory]=useState("all")
  
const filteredSkills = skills.filter((skill)=>activeCategory === "all" || skill.category === activeCategory
);
return (
<section id="skills"
 className="py-24 px-4 relative bg-secondary/30">
<div className="container mx-auto max-2-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold text-center">
        My <span className="text-primary">Skills</span>
    </h2>
    <div className="flex flex-wrap justify-center gap-4 mb-12">
            {
                catageories.map((catagorie,key)=>(
        <button
  key={key}
  onClick={() => setActiveCategory(catagorie)}
  className={cn(
    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
    activeCategory === catagorie
      ? "bg-primary text-primary-foreground"
      : "bg-secondary/70 text-foreground hover:bg-secondary"
  )}
>
  {catagorie}
</button>
                ))
}

    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill,key)=>(
            <div key={key} 
            className="bg-card p-6 rounded-lg shadow-xs card-hover">
        <div className="text-left mb-4">      
             <h3 className="font-semibold text-lg">{skill.name}</h3>
        </div>
      
        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"></div>
         <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width:skill.level + "%"}}
         />
       
       <div className="text-right mt-1">
<span className="text-sm text-muted-forground">{skill.level}%</span>
       </div>
       </div>
    ))}
</div>
</div>
 </section>
)

}