import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Cloud, Database, Shield, Server, FileSpreadsheet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Microsoft Azure Fundamentals", provider: "Microsoft", icon: Cloud },
  { name: "Microsoft Azure Developer", provider: "Microsoft", icon: Cloud },
  { name: "Data Analysis Essentials", provider: "IBM", icon: Database },
  { name: "Cybersecurity Essentials", provider: "IBM", icon: Shield },
  { name: "Introduction to IT Hardware", provider: "Cisco", icon: Server },
  { name: "Administration", provider: "EduCourse", icon: Award },
  { name: "Data Entry", provider: "EduCourse", icon: FileSpreadsheet },
  { name: "Excel", provider: "EduCourse", icon: FileSpreadsheet },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-sm text-foreground leading-tight mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {cert.provider}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
