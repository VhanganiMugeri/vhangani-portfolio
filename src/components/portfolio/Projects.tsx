import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderCode, Github, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import sentimentIQImage from "@/assets/project-sentimentiq.png";
import rightsWiseImage from "@/assets/project-rightswise.png";
import simjojoImage from "@/assets/project-simjojo.png";

const projects = [
  {
    title: "SentimentIQ",
    description:
      "An AI-powered sentiment analysis platform that turns raw customer reviews into actionable business intelligence.",
    image: sentimentIQImage,
    github: "https://github.com/VhanganiMugeri/sentimentanalysisv",
    live: "https://sentimentanalysisv.lovable.app",
    tags: ["React", "TypeScript", "AI", "Tailwind CSS"],
  },
  {
    title: "RightsWise AI",
    description:
      "An AI-powered platform helping organizations protect and manage their intellectual property rights in the AI era — combining legal, compliance, and AI governance tools to track content usage, support licensing, and safeguard digital ownership.",
    image: rightsWiseImage,
    github: "https://github.com/VhanganiMugeri/rightswise-ai",
    live: "https://rightswise-ai.lovable.app",
    tags: ["React", "TypeScript", "AI", "Governance"],
  },
  {
    title: "SIMJOJO POS",
    description:
      "A modern online ordering and delivery platform built for Simjojo Braai Chicken — designed for quick ordering, easy product browsing, and a smooth checkout experience.",
    image: simjojoImage,
    github: "https://github.com/VhanganiMugeri/simjojo-quickv-order",
    live: "https://simjojo-quickv-order.lovable.app",
    tags: ["React", "TypeScript", "POS", "Tailwind CSS"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <FolderCode className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my frontend and full-stack development
            skills, built with modern tools and a focus on clean, usable products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <Card className="h-full bg-card border-border overflow-hidden hover:border-primary/40 transition-all duration-300 group flex flex-col">
                <div className="relative overflow-hidden aspect-video bg-muted">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <Button asChild size="sm" variant="outline" className="flex-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
