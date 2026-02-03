import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Code2 } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formal academic foundation in computer science and software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-primary/30">
            <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 bg-primary rounded-full" />
            
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Bachelor's Degree in Computer Science
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Graduate | Johannesburg, South Africa
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Core computer science fundamentals including algorithms, 
                        data structures, and software engineering principles.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Code2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Practical learning through hands-on development projects 
                        and collaborative coursework.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
