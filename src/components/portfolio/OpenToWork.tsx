import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const OpenToWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
            </span>
            <span className="text-sm font-medium text-primary">Open to Work</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready for New Opportunities
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Open to full-time <span className="text-foreground font-medium">Graduate Software Developer</span> or{" "}
            <span className="text-foreground font-medium">Data Analyst</span> opportunities.
          </p>

          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <a href="#contact">
              <Briefcase className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenToWork;
