import { ArrowDown } from "lucide-react"
export const HeroSection=()=>{



    return <section id="hero" className="relativ min-h-screen flex felx-col items-center justify-center px-4"
>
<div className="container maw-w-4xl mx-auto text-center z-10">
    <div className="space-y-6">
        <h1 className="text-4xl md:text-xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
                 Haddouch 
                 </span>
            <span className="text-gradiant ml-2 opacity-0 animate-fade-in-delay-2">
                 Ismail
            </span>

        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
         I am a Full-Stack Web Developer with experience building responsive websites and web applications for small and medium-sized businesses. I specialize in React.js, Laravel, PHP, and MySQL, creating solutions that help clients showcase their services, attract new customers,
         or launch e-commerce stores.
        </p>
      <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#projectes" className="cosmic-button">
        view My Work
        </a>
        </div>
    </div>
</div>
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
<span className="text-sm text-muted-foreground mb-2">Scroll</span>
<ArrowDown className="h-5 w-5 text-primary"/>
</div>
    </section>
}