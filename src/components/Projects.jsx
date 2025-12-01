import { Tags } from "lucide-react";
import { Github } from "lucide-react";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";
const projects = [
    {
        id:1 ,
        title:"Gestion Consomables",
        description: "application web qui gere la gestion de stock pour une etablissment",
        image:"/Projects/Gstcns3.PNG",
        tags:["React","Laravel","MySQl"],
        githubUrl:"#"

    },

     {
        id:1 ,
        title:"Gestion Consomables",
        description: "application web qui gere la gestion de stock pour une etablissment",
        image:"/Projects/GstCons3.PNG",
        tags:["React","Laravel","MySQl"],
        githubUrl:"#"

    }

]
export const Projects = () =>{


return (
   <section id="projects" className="py-24 px-4 relativ" >
    <div className="container mx-auto max-w-5xl">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {""}
        Featureed <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            here are some of my recent projects.each projects was carefully crafted with attention to detail 
            performance and user experince
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project,key) => (
                <div key={key} 
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                <div className="h-48 w-full overflow-hidden rounded-lg">
  <img
    src={project.image}
    alt={project.title}
    className={cn(
      "w-full h-full object-cover block transform transition-transform duration-500",
      "hover:scale-110"
    )}
  />
</div>
                 <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag)=>(
                   <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/80 text-secondary-foreground">
                    {tag}
                    </span>

                        ))}
                    </div>
                 </div>
                 <div>
                 <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                 <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                 <a href={project.githubUrl} 
                 target="_blank"
                 className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    <Github size={20}/>
                 </a>
                </div>
                </div>
                 </div>
                </div>
            ))}

        </div>

        <div className="text-center mt-12">
            <a 
            className="cosmic-button w-fit flex items-center mx-auto gap-2 " href="https://github.com/IsmailHaddouch?tab=repositories "
            target="_blank"
            >
            Check My Github <ArrowRight size={16}/>

            </a>
        </div>
    </div>
  
</section>
)
}