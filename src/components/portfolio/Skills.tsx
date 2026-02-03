import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Users } from "lucide-react";

const technicalSkills = [
  "HTML5", "CSS3", "Flexbox", "Grid", "Responsive Design",
  "JavaScript (ES6)", "DOM Manipulation", "React", "Components", "Props", "Hooks",
  "Node.js", "REST APIs", "Python", "SQL", "JSON",
  "Data Structures", "Algorithms"
];

const tools = [
  "Git & GitHub", "VS Code", "NPM / Yarn", "Chrome DevTools",
  "Firebase", "Netlify", "Vercel", "Linux CLI", "Figma", "Postman"
];

const softSkills = [
  "Problem-solving", "Communication", "Team Collaboration",
  "Adaptability", "Time Management", "Attention to Detail",
  "Self-driven Learning", "Receptive to Feedback"
];

const SkillCategory = ({ 
  title, 
  icon: Icon, 
  skills, 
  delay 
}: { 
  title: string; 
  icon: React.ElementType; 
  skills: string[]; 
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full bg-card border-border hover:border-primary/30 transition-colors duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: delay + index * 0.02 }}
              >
                <Badge variant="secondary" className="bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-foreground transition-colors">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic projects and self-directed learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory 
            title="Technical Skills" 
            icon={Code} 
            skills={technicalSkills} 
            delay={0.1} 
          />
          <SkillCategory 
            title="Tools & Platforms" 
            icon={Wrench} 
            skills={tools} 
            delay={0.2} 
          />
          <SkillCategory 
            title="Soft Skills" 
            icon={Users} 
            skills={softSkills} 
            delay={0.3} 
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
