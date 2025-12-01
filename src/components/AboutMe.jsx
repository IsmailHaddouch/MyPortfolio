import { Briefcase, Code ,User} from "lucide-react"
export const AboutMe=()=>{

    return <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
    <h3 className="text-2xl font-semibold">Passionate web developper ande creative </h3>
<p className="tet-muted-foreground">
Je m'appelle Haddouch Ismail, développeur web passionné 
et diplômé en développement numérique spécialisé full stack.</p>
<p className="tet-muted-foreground">
 Je suis spécialisé dans la création de solutions web interactives et performantes, avec une forte expérience en 
 React.js, Laravel, TailwindCSS, et l'intégration de cartes interactives avec Leaflet.js. J'aime concevoir des applications qui améliorent l'expérience utilisateur et apportent une réelle valeur ajoutée. Toujours curieux et motivé par les nouvelles technologies, je cherche à créer des projets innovants, comme des plateformes de gestion ou des outils intelligents basés sur l'IA, tout en mettant l'accent sur le design et la qualité du code.
</p>
<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
  <a 
    href="/MonCv.pdf"                  // chemin vers ton fichier CV dans public
    download="MonCv.pdf"              // nom du fichier téléchargé
    className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
  >
    Download CV
  </a>
</div>
</div>

<div className="grid grid-cols-1 gap-6">
    <div className="gradient-border p-6 card-hover"> 
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary-10">
         <Code className="h-6 w-6 text-primary"/>

            </div>
            <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
          I develop interactive, high-performance web applications using React.js, Laravel, and TailwindCSS. I also integrate dynamic features such as interactive maps with Leaflet.js to enhance user experience.
                </p>

            </div>
        </div>
    </div>
      <div className="gradient-border p-6 card-hover"> 
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary-10">
         <User className="h-6 w-6 text-primary"/>
            </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg"> UI|UX Design</h4>
                <p className="text-muted-foreground">
          Skilled in designing user interfaces with Figma, focusing on clean layouts, seamless user experience, and accessibility to create intuitive web applications.
                </p>

            </div>
        </div>
      </div>
       <div className="gradient-border p-6 card-hover"> 
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary-10">
         <Briefcase className="h-6 w-6 text-primary"/>
         </div>
         <div className="text-left">
                <h4 className="font-semibold text-lg">Project Management</h4>
                <p className="text-muted-foreground">
          Experienced in building full-stack projects with React, Java, and Spring Boot. All projects are hosted on GitHub and demonstrate practical application of modern web development practices.

                </p>

            </div>
        </div>
       </div>
</div>

</div>
        </div>

    </section>
}