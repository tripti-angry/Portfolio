import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
{
  id: 1,
  title: "Sort-a-Path - Algorithm Visualizer",
  description: "Interactive web app visualizing pathfinding algorithms including Dijkstra, A*, BFS, and DFS with dynamic grid system and real-time animations to demonstrate algorithm efficiency and path optimization.",
  image: "/projects/sort-a-path.png", 
  tags: ["React", "JavaScript", "HTML5 Canvas"],
  demoUrl: "https://tripti-angry.github.io/Sort-a-Path/",
  githubUrl: "https://github.com/tripti-angry/Sort-a-Path", 
},
{
  id: 2,
  title: "FundFlow – AI-Powered Personal Finance Tracker",
  description: "Secure finance app with AI-driven spending insights, real-time transaction storage, and linear regression models for predicting spending trends with accuracy indicators.",
  image: "/projects/fund-flow.png", 
  tags: ["React", "TypeScript", "Supabase"],
  // demoUrl: "#", 
  githubUrl: "https://github.com/tripti-angry/fundflow",
},
{
  id: 3,
  title: "GoWheels - Cab Booking Service",
  description: "Full-stack cab booking application with user authentication, real-time booking capabilities, SQL database management for user profiles and trips, and Node.js server-side logic for booking requests and driver assignments.",
  image: "/projects/go-wheels.png",
  tags: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
  // demoUrl: "#", // Add demo URL if available
  githubUrl: "https://github.com/tripti-angry/GoWheels",
}
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/tripti-angry"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
