import { Linkedin, Mail, MapPin, Send } from "lucide-react"

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>      
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information - GAUCHE */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-start space-x-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Email</h4>
                                    <a 
                                        href="mailto:smailhaddouch21@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        smailhaddouch21@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* LinkedIn */}
                            <div className="flex items-start space-x-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">LinkedIn</h4>
                                    <a 
                                        href="https://www.linkedin.com/in/ismail-haddouch-858649305/"
                                        className="cosmic-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Visit My Profile
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start space-x-4">
                                <div className="p-4 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-1">Location</h4>
                                    <p className="text-muted-foreground">
                                        Taza, Fes-Meknes, Morocco
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - DROITE (EN FACE) */}
                    <div className="bg-card p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Your name..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    placeholder="Your email..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                    placeholder="Your message..."
                                />
                            </div>

                            <button
                                type="button"
                                className="cosmic-button w-full flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}