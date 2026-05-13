import { Download, MapPin } from "lucide-react";
import cvFile from "@/assets/Vhangani_Mugeri_CV.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card/50 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-foreground">
              Vhangani Mugeri
            </h3>
            <p className="text-sm text-muted-foreground">
              Graduate Software Developer
            </p>
            <div className="flex items-center justify-center md:justify-start gap-1 mt-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>Johannesburg, South Africa</span>
            </div>
          </div>

          <a 
            href={cvFile}
            download="Vhangani_Mugeri_CV.pdf"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>

          <p className="text-xs text-muted-foreground">
            © {currentYear} Vhangani Mugeri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
