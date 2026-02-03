import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, Code2 } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Me
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I'm a recent graduate with a strong foundation in frontend development 
            and full-stack basics. I'm passionate about creating intuitive user experiences 
            and writing clean, maintainable code. Currently seeking my first professional 
            role where I can contribute, learn, and grow as a developer.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Johannesburg, South Africa</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
            >
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Open to Full-time Roles</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
            >
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Frontend & Full Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
